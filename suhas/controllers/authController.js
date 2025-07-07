const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const {promisify} = require("util");

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    if(process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("jwt", token, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    });
}

exports.signup = catchAsync(async (req, res) => {
        if(!req.body.name || !req.body.email || !req.body.password) {
            return next(new AppError("Missing reqired fields",400));
        }
        const user = await User.findOne({email: req.body.email});
        if(user) {
            return next(new AppError("User already exists",400));
        }
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res) => {
        const {email, password} = req.body;
        //const email = req.body.email;
        //const password = req.body.password;
        if(!email || !password) {
            return next(new AppError("Missing reqired fields",400));
        }
        const user = await User.findOne({email}).select("+password");
        if(!user) {
            return next(new AppError("Missing reqired fields",401));
        }
        const isCorrect = await user.correctPassword(password, user.password);   
        if(!isCorrect) {
            return next(new AppError("Missing reqired fields",401));
        }
        createSendToken(user, 200, res);
});

exports.protect = catchAsync(async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        return next(new AppError("You are not logged in",401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const userID = decoded.id;

    const currentUser = await User.findById(userID);

    if(!currentUser) {
        return next(new AppError("User not found",401));
    }
    req.user = currentUser;
    next();
});

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.roles)) {
            return next(new AppError(" You are not authorized to access this resource ",403));
        }
        next();
    }
}
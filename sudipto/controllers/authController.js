const User = require("../models/User");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //this line cutoff the (document.cookie) xss attack
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    // return res.status(400).json({
    //   status: "error",
    //   message: "Missing required fields",
    // });
    return next(new AppError("Missing required fields", 400));
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // return res.status(400).json({
    //   status: "error",
    //   message: "User already exists",
    // });
    return next(new AppError("User already exists", 409));
  }

  // const newUser = await User.create(req.body);
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }); //used to prevent anyone singedUp as admin through postman

  // res.status(201).json({
  //   status: "Success",
  //   data: newUser,
  // });

  createSendToken(newUser, 201, res);
});

exports.logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // return res.status(400).json({
    //   status: "error",
    //   message: "Missing required fields",
    //   });
    return next(new AppError("Missing required fields", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    // return res.status(401).json({
    //   status: "error",
    //   message: "Invalid email or password",
    //   });
    return next(new AppError("Invalid email or password", 401));
  }
  const isCorrect = await user.correctPassword(password, user.password);
  if (!isCorrect) {
    // return res.status(401).json({
    //   status: "error",
    //   message: "Incorrect email or password",
    //   });
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, res);
});

//exports.protect used to check authentication
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You are not logged in", 401));
  }
  const decorded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const userId = decorded.id;

  const currentUser = await User.findById(userId);

  if (!currentUser) {
    return next(new AppError("The user not found", 401));
  }
  req.user = currentUser;
  next();
});

//restrictTo used to check if user is authorized or not
exports.restrictTo = (...roles) =>{
  return (req, _res, next) =>{
    if(!roles.includes(req.user.role)){
      return next(new AppError("You are not authorized to access this route", 403));
    } 
    next();
  }
}
//factory function

//exports.restrict to
//exports.forgotPassword

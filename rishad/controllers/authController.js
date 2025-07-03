const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
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
    ), // 24 hours
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // Use secure cookies in production
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined; // Remove password from response
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    // return res.status(400).json({
    //   status: "fail",
    //   message: "Name, email, and password are required",
    // });
    return next(new AppError("Missing required fields", 400));
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // return res.status(400).json({
    //   status: "fail",
    //   message: "Email already exists",
    // });
    return next(new AppError("Email already exists", 400));
  }

  const newUser = await User.create(req.body);
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body;
  if (!email || !password) {
    // return res.status(400).json({
    //   status: "fail",
    //   message: "Email and password are required",
    // });
    return next(new AppError("Email and password are required", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    // return res.status(401).json({
    //   status: "fail",
    //   message: "Incorrect email or password",
    // });
    return next(new AppError("Incorrect email or password", 401));
  }

  const iscorrect = await user.correctPassword(password, user.password);
  if (!iscorrect) {
    // return res.status(401).json({
    //   status: "fail",
    //   message: "Incorrect email or password",
    // });
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, res);
});

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

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  const currentUser = await User.findById(userId);
  if (!currentUser) {
    return next(new AppError("User not found", 401));
  }

  req.user = currentUser;
  next();
});

// exports.logout
// exports.forgotPassword
// exports.resetPassword
// exports.updatePassword
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already exists"],
    lowecase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be 8 character long"],
    maxlength: [20, "Password must be within 20 characters"]
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

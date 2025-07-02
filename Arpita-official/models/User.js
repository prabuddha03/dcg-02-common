const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt=require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    maxlength: [30, "Password must be less than 20 characters long"],
  },
});


userSchema.pre("save", async function (next) {
  // Hash the password before saving
  if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    //this.passwordConfirm = undefined; // Remove passwordConfirm field after hashing
  
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
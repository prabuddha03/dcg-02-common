const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Name is required"],
        unique: [true, "Email already exists"],
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    password: {
        type: String,
        require: true,
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [30, "Password need to less than 30 charecter"]
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
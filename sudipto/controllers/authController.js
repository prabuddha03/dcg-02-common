const User = require("../models/User");

exports.signUp = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields",
      });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        status: "error",
        message: "User already exists",
      });
    }

    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "Success",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create user",
    });
  }
};

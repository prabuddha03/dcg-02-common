const express = require("express");
const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/booking", authController.protect, bookingController.createBooking);
    
module.exports = router;
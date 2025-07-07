const Booking = require("../models/booking");
const catchAsync = require("../utils/catchAsync");

exports.createBooking = catchAsync(async (req, res, next) => {
    const newBooking = await Booking.create({

    user : req.user._id,
    tour : req.body.tour,
    });
    res.status(201).json({
        status: "success",
        message: "Booking created successfully",
        data: newBooking,
    });

});
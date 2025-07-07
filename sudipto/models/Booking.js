const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true 
    },
    tour:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
    }
})

module.exports = mongoose.model("Booking", bookingSchema);

//parent refferencing
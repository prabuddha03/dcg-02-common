const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model("Tour", tourSchema);
const mongoose = require("mongoose");

const tourSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        types: Number,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },

})

module.exports = mongoose.model("Tour",tourSchema);
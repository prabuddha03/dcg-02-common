const { type } = require("os");

const mongoose = requiire ("mongoose");
const tourSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : TextTrackCue, 
    },
    price : {
        type : Number,
    },
    descirption: {
        type : String,
        required : true,
    },
    image: {
         type : String,
    }
})
module.exports = mongoose.model ("Tour",tourSchema);

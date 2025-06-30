const mongoose = require("mongoose");


const tourSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },

    price:  {
        type: Number,
    },

    descreption:  {
        type: String,
        required: true,
    },

    image : {
        type:String,
    },

}
)
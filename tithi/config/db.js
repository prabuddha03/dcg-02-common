const mongoose= require("mongoose");
require('dotenv').config()
//console.log(process.env.mongoDb_url)
const connectDB= async () => { 
    try{
        await mongoose.connect(process.env.mongoDb_url);
        console.log("mongoDb connected");

    } catch (error) {
        console.log(error);
    }
    
};
module.exports=connectDB;
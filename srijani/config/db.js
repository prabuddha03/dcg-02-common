 const mongoose = require ("mongoose");

 const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri);
        console.log("MongoDB Connected");
    } catch(error){
        console.log(error.message);
    }
 };

 module.exports = connectDB;

const mongoose=require ("mongoose");
require('dotenv').config();
console.log(process.env.DB_URI)
const connectDB =async () => {
        try {
            await mongoose.connect(process.env.DB_URI);
            console.log("mongoDB connected");}
            catch (error) {
                console.log(error);
            }
        };

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDb= async ()=>{

    try{

        await mongoose.connect(process.env.mongodb_URI);
        console.log("connect");
        
    }catch(error){
        console.log("error ",error);
        
    }
    


}


module.exports=connectDb;
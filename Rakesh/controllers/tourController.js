const Tour= require("../models/Tour");
exports.createTour= async(req,res)=>{
    try{
    const newTour=await Tour.create(req.body);
    res.status(200).json(newTour);

    }catch(error){
        console.log("error",error);
        
        res.status(500).json(error)
        
    }
}

exports.getAllTour= async(req,res)=>{
    try{
    const newTour=await Tour.find();
    res.status(200).json(newTour);

    }catch(error){
        console.log("error",error);
        
        res.status(500).json(error)
        
    }
}

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

 exports.getTourById = async (req, res)=> {

try {
 const tour = await Tour.findById(req.params.id);


 if (!tour){

 return res.status(404).json({


message: "Tour not found"

 })

}


 res.status(200).json({

 status: "success",

 message: "tours fetched successfully",

 data:tour,

 });

} catch (error) {
console.log(error);

 res.status(500).json(error);

}

};





exports.updateTour = async (req, res)=> {

 try {

const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{ new : true });


 if (!tour){

 return res.status(404).json({

 status: "error",

 message: "Tour not found"

 })

}


 res.status(204).json({

 status: "success",

 message: "tours updated successfully",

 data:tour,

 });

} catch (error) {

 console.log(error);

 res.status(500).json(error);

 }

};




exports.deleteTour = async (req, res)=> {

 try {

 const tour = await Tour.findByIdAndDelete(req.params.id);


if (!tour){

return res.status(404).json({

 status: "error",

 message: "Tour not found"

 })

 }


 res.status(204).json({

 status: "success",

 message: "tours deleted successfully",

 data:tour,

 });

 } catch (error) {

 console.log(error);

 res.status(500).json(error);

 }

};

exports.getByIdparam= async(req, res)=>{
    try{
const tourId = req.query.id; 
    const oneTour = await Tour.findById(tourId); 

        res.status(200).json(oneTour)
    }catch(error){
        console.log(error);
        
    }
}

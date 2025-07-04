const Tour = require("../models/Tour");

exports.createTour = async (req, res) =>{
    const newTour = new Tour(req.body);
    try{
        const newTour = await Tour.create(req.body);
        res.status(200).json(newTour);
    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
};



exports.getAllTours = async (req,res) =>{
try{
    const tours = await Tour.find();

  res.status(200).json(newTour);
    } 
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};


const Tour = require("../models/Tour");
exports.createTour = async (req , res) => {
    try{
        const newTour = await Tour.create(res.body);
        res.status(200).json(newTour);
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
};

exports.getAllTours = async (req,res) => {
    try{
        const Tour = await Tour.find();
        res.status(200).json(tours);
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
};
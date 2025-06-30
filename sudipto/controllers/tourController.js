const Tour= require ("../models/Tour");

// const createTour = async (req, res) => {
exports.createTour = async (req, res) => {
    try{
        const newTour= await Tour.create(req.body);
        res.status(200).json(newTour);
        console.log("Tour has created");
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

// const getAllTours = async (req,res) => {
exports.getAllTours = async (req,res) => {
    try{
        const newTour= await Tour.create(req.body);
        res.status(200).json(newTour);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

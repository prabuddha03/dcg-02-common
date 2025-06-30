const tour = require("../models/Tour");




exports.creatTour = async (req, res)=> {
    try {
        const newTour = await Tour.creat(req.body);
        res.status(200).json(newTour);
    }  catch (error)  {
        res.status(500).json(error);
    }
};



exports.getAllTours = async (req, res)=> {
    try {
        const tours = await Tour.find();
        res.status(200).json(newTour);
    }  catch (error)  {
        console.log(error);
        res.status(500).json(error);
    }
};
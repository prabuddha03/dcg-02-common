
 const Tour = require("../models/Tour");

 exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(200).json(newTour);
    } catch (error) {
        res.status(500).json(error);
    }
 };

 exports. getAllTours = async (req, res) => {
   try { 
     const tours = await Tour.find();
        res.status (200).json(tours);
    } catch (error) {
        console.log (error);
        res.status(500) .json (error);
    }
};

    
 


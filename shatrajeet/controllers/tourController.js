const Tour= require("../models/Tour");

exports.createTour = async (req,res) => {
    try{
        const newTour= await Tour.create(req.body);
        res.status(200).json(newTour);{
            status:"success";
            message:"Tour created successfully";
            data:newTour;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

exports.getAllTours = async (req,res) => {
    try{
        const tours= await Tour.find();
        res.status(200).json(tours);{
            status:"success";
            message:"Tour fetched successfully";
            data:tours;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

exports.getTourById = async (req,res) => {
    try{
        //tours/:id
        const tour= await Tour.findById(req.params.id);

        if(!tour){
        return res.status(404).json({
            status:"error",
            message:"Tour not found",
        });
    }
    res.status(200).json({
            status:"success",
            message:"Tour fetched successfully",
            data:tour,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

exports.updateTour = async (req,res) => {
    try{
        const tour= await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!tour){
        return res.status(404).json({
            status:"error",
            message:"Tour not found",
        });
    }
    res.status(200).json({
            status:"success",
            message:"Tour updated successfully",
            data:tour,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

exports.deleteTour = async (req,res) => {
    try{
        const tour= await Tour.findByIdAndDelete(req.params.id);

        if(!tour){
        return res.status(404).json({
            status:"error",
            message:"Tour not found",
        });
    }
    res.status(200).json({
            status:"success",
            message:"Tour deleted successfully",
            data:tour,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
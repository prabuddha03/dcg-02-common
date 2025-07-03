const Tour = require("../models/Tour");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// const createTour = async (req, res) => {
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Tour created successfully",
      data: newTour,
    });
    console.log("Tour has created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// const getAllTours = async (req,res) => {
exports.getAllTours = catchAsync(async (req, res) => {
  // try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      message: "All tours fetched successfully",
      data: tours,
    });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json(error);
  // }
  return next(new AppError("Missing required fields", 400));
});

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({
        status: "error",
        message: "Tour not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!tour) {
      return res.status(404).json({
        status: "error",
        message: "Tour not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Tour updated successfully",
      data: tour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id, req.body);
    if (!tour) {
      return res.status(404).json({
        status: "error",
        message: "Tour not found",
      });
    }
    res.status(204).json({
      status: "Success",
      message: "Tour deleted successfully",
      data: tour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

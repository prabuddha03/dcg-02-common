const Tour = require("../models/Tour");
const catchAsync = require("../utils/catchAsync");
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Tour created successfully",
      data: newTour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getAllTours = catchAsync(async (req, res) => {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      message: "Tours fetched successfully",
      data: tours,
    });
});

exports.getTourById = async (req, res) => {
  try {
    //tours/:id
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        status: "error",
        message: "Tour not found",
      });
    }

    res.status(200).json({
      status: "success",
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
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true});
    //console.log(tour);
    if (!tour) {
      return res.status(404).json({
        status: "error",
        message: "Tour not found",
      });
    }
    res.status(200).json({
      status: "success",
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
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({
        status: "error",
        message: "Tour not found",
      });
    }
    res.status(204).json({
      status: "success",
      message: "Tour deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");

router 
    .route("/")
    .post(tourController.createTour)
    .get(tourController.getAllTours);

    module.exports = router;
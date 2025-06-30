const express = require("express");
const tourController =  require("../controllers/TourController");

const router = express.Router()

router  
    .route("/")
    .post( tourController.creatTour)
    .get(tourController.getAllTours);

module.exports = router;
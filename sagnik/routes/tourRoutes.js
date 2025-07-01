const express = require("express");
const tourController =  require("../controllers/TourController");

const router = express.Router()

router  
    .route("/")
    .post( tourController.creatTour)
    .get(tourController.getAllTours);


router
    .route("/:id")
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);


module.exports = router;
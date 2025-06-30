const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

// router.post("/",tourController.createTour);
// router.get("/",tourController.getAllTours);

router
  .route("/")
  .post(tourController.createTour)
  .get(tourController.getAllTours);

module.exports = router;

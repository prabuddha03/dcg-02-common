const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");
const authController = require("../controllers/authController");

// router.post("/",tourController.createTour);
// router.get("/",tourController.getAllTours);

router
  .route("/")
  .post(authController.protect,tourController.createTour)
  .get(authController.protect,tourController.getAllTours);

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(authController.protect, authController.restrictTo("admin", "moderate"), tourController.updateTour)
  .delete(authController.protect, authController.restrictTo("admin", "moderate"),tourController.deleteTour);

module.exports = router;
 
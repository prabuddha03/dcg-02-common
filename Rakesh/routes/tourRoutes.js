const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

router
  .route("/")
  .post(tourController.createTour)
  .get(tourController.getAllTour); // GET /

router
.route("/:id")

 .get(tourController.getTourById)
 .patch(tourController.updateTour)

 .delete(tourController.deleteTour);

  router
  .route("/ad/")
  .get(tourController.getByIdparam);
  
  // GET /:id

module.exports = router;

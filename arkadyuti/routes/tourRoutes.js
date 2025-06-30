const express=require("express");
const router=express.Router();
const tourController=require("../contorllers/tourController");

router
.route("/")
.post(tourController.createTour)
.get(tourController.getAllTours);

module.exports=router;

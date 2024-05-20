import express from "express";
import {
  createCar,
  deleteCar,
  getAllCar,
  getFeaturedCar,
  getSingleCar,
  getCarBySearch,
  getCarCount,
  updateCar,
} from "./../controllers/carController.js";
import { adminAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// create new hotel
router.post("/", adminAuth, createCar);

// update  hotel
router.put("/:id", adminAuth, updateCar);

// delete hotel
router.delete("/:id", adminAuth, deleteCar);

// get single hotel
router.get("/:id", getSingleCar);

// get all hotel
router.get("/", getAllCar);

// get hotel by search
router.get("/search/getCarBySearch", getCarBySearch);
router.get("/search/getFeaturedCars", getFeaturedCar);
router.get("/search/getCarCount", getCarCount);

export default router;

import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getFeaturedHotel,
  getSingleHotel,
  getHotelBySearch,
  getHotelCount,
  updateHotel,
} from "./../controllers/hotelController.js";
import { adminAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// create new hotel
router.post("/", adminAuth, createHotel);

// update  hotel
router.put("/:id", adminAuth, updateHotel);

// delete hotel
router.delete("/:id", adminAuth, deleteHotel);

// get single hotel
router.get("/:id", getSingleHotel);

// get all hotel
router.get("/", getAllHotel);

// get hotel by search
router.get("/search/getHotelBySearch", getHotelBySearch);
router.get("/search/getFeaturedHotels", getFeaturedHotel);
router.get("/search/getHotelCount", getHotelCount);

export default router;

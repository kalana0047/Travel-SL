import express from "express";
import {
  createGuide,
  deleteGuide,
  getAllGuide,
  getFeaturedGuide,
  getSingleGuide,
  getGuideBySearch,
  getGuideCount,
  updateGuide,
} from "./../controllers/guideController.js";
import { adminAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// create new hotel
router.post("/", adminAuth, createGuide);

// update  hotel
router.put("/:id", adminAuth, updateGuide);

// delete hotel
router.delete("/:id", adminAuth, deleteGuide);

// get single hotel
router.get("/:id", getSingleGuide);

// get all hotel
router.get("/", getAllGuide);

// get hotel by search
router.get("/search/getGuideBySearch", getGuideBySearch);
router.get("/search/getFeaturedGuides", getFeaturedGuide);
router.get("/search/getGuideCount", getGuideCount);

export default router;

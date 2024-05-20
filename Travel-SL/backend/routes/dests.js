import express from "express";
import {
  createDest,
  deleteDest,
  getAllDest,
  getFeaturedDest,
  getSingleDest,
  getDestBySearch,
  getDestCount,
  updateDest,
} from "./../controllers/destController.js";
import { adminAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// create new hotel
router.post("/", adminAuth, createDest);

// update  hotel
router.put("/:id", adminAuth, updateDest);

// delete hotel
router.delete("/:id", adminAuth, deleteDest);

// get single hotel
router.get("/:id", getSingleDest);

// get all hotel
router.get("/", getAllDest);

// get hotel by search
router.get("/search/getDestBySearch", getDestBySearch);
router.get("/search/getFeaturedDests", getFeaturedDest);
router.get("/search/getDestCount", getDestCount);

export default router;

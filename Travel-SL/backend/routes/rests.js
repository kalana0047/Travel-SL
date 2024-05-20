import express from "express";
import {
  createRest,
  deleteRest,
  getAllRest,
  getFeaturedRest,
  getSingleRest,
  getRestBySearch,
  getRestCount,
  updateRest,
} from "./../controllers/restController.js";
import { adminAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// create new 
router.post("/", adminAuth, createRest); 

// update  
router.put("/:id", adminAuth, updateRest);

// delete 
router.delete("/:id", adminAuth, deleteRest);

// get single 
router.get("/:id", getSingleRest);

// get all 
router.get("/", getAllRest);

// get  by search
router.get("/search/getRestBySearch", getRestBySearch);
router.get("/search/getFeaturedRests", getFeaturedRest);
router.get("/search/getRestCount", getRestCount);

export default router;

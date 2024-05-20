import express from "express";
import Complaint from "../models/Complaint.js";

const router = express.Router();

// Create a new complaint
router.post("/", async (req, res) => {
  try {
    const newComplaint = new Complaint(req.body);
    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

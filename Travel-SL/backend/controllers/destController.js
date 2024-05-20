import Dest from "../models/Dest.js";

// create new hotel
export const createDest = async (req, res) => {
  const newDest = new Dest(req.body);

  try {
    const savedDest = await newDest.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedDest,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update hotel
export const updateDest = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDest = await Dest.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDest,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete hotel
export const deleteDest = async (req, res) => {
  const id = req.params.id;

  try {
    await Dest.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

// getSingle hotel
export const getSingleDest = async (req, res) => {
  const id = req.params.id;

  try {
    const dest = await Dest.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: dest,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll hotel
export const getAllDest = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const dests = await Dest.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: dests.length,
      message: "Successful",
      data: dests,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel by search
export const getDestBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");

  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const dests = await Dest.find({
      city,
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: dests,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get featured hotel
export const getFeaturedDest = async (req, res) => {
  try {
    const dests = await Dest.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: dests,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel counts
export const getDestCount = async (req, res) => {
  try {
    const destCount = await Dest.estimatedDocumentCount();

    res.status(200).json({ success: true, data: destCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

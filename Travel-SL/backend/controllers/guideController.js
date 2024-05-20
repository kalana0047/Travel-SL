import Guide from "../models/Guide.js";

// create new hotel
export const createGuide = async (req, res) => {
  const newGuide = new Guide(req.body);

  try {
    const savedGuide = await newGuide.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedGuide,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update hotel
export const updateGuide = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedGuide = await Guide.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedGuide,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete hotel
export const deleteGuide = async (req, res) => {
  const id = req.params.id;

  try {
    await Guide.findByIdAndDelete(id);

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
export const getSingleGuide = async (req, res) => {
  const id = req.params.id;

  try {
    const guide = await Guide.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: guide,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll hotel
export const getAllGuide = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const guides = await Guide.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: guides.length,
      message: "Successful",
      data: guides,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel by search
export const getGuideBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");

  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const guides = await Guide.find({
      city,
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: guides,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get featured hotel
export const getFeaturedGuide = async (req, res) => {
  try {
    const guides = await Guide.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: guides,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel counts
export const getGuideCount = async (req, res) => {
  try {
    const guideCount = await Guide.estimatedDocumentCount();

    res.status(200).json({ success: true, data: guideCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

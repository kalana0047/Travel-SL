import Rest from "../models/Rest.js";

// create new hotel
export const createRest = async (req, res) => {
  const newRest = new Rest(req.body);

  try {
    const savedRest = await newRest.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedRest,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update hotel
export const updateRest = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedRest = await Rest.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedRest,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete hotel
export const deleteRest = async (req, res) => {
  const id = req.params.id;

  try {
    await Rest.findByIdAndDelete(id);

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
export const getSingleRest = async (req, res) => {
  const id = req.params.id;

  try {
    const rest = await Rest.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: rest,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll hotel
export const getAllRest = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const rests = await Rest.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: rests.length,
      message: "Successful",
      data: rests,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel by search
export const getRestBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");

  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const rests = await Rest.find({
      city,
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: rests,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get featured hotel
export const getFeaturedRest = async (req, res) => {
  try {
    const rests = await Rest.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: rests,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel counts
export const getRestCount = async (req, res) => {
  try {
    const restCount = await Rest.estimatedDocumentCount();

    res.status(200).json({ success: true, data: restCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

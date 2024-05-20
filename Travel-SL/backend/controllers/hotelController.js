import Hotel from "../models/Hotel.js";

// create new hotel
export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedHotel,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update hotel
export const updateHotel = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedHotel,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete hotel
export const deleteHotel = async (req, res) => {
  const id = req.params.id;

  try {
    await Hotel.findByIdAndDelete(id);

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
export const getSingleHotel = async (req, res) => {
  const id = req.params.id;

  try {
    const hotel = await Hotel.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: hotel,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll hotel
export const getAllHotel = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const hotels = await Hotel.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: hotels.length,
      message: "Successful",
      data: hotels,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel by search
export const getHotelBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");

  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const hotels = await Hotel.find({
      city,
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: hotels,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get featured hotel
export const getFeaturedHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: hotels,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel counts
export const getHotelCount = async (req, res) => {
  try {
    const hotelCount = await Hotel.estimatedDocumentCount();

    res.status(200).json({ success: true, data: hotelCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

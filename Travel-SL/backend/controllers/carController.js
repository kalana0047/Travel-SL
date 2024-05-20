import Car from "../models/Car.js";

// create new hotel
export const createCar = async (req, res) => {
  const newCar = new Car(req.body);

  try {
    const savedCar = await newCar.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedCar,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update hotel
export const updateCar = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCar = await Car.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedCar,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete hotel
export const deleteCar = async (req, res) => {
  const id = req.params.id;

  try {
    await Car.findByIdAndDelete(id);

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
export const getSingleCar = async (req, res) => {
  const id = req.params.id;

  try {
    const car = await Car.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: car,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll hotel
export const getAllCar = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const cars = await Car.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: cars.length,
      message: "Successful",
      data: cars,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel by search
export const getCarBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");

  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const cars = await Car.find({
      city,
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: cars,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get featured hotel
export const getFeaturedCar = async (req, res) => {
  try {
    const cars = await Car.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: cars,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get hotel counts
export const getCarCount = async (req, res) => {
  try {
    const carCount = await Car.estimatedDocumentCount();

    res.status(200).json({ success: true, data: carCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

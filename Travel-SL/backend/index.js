import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import hotelRoute from "./routes/hotels.js";
import restRoute from "./routes/rests.js";
import carRoute from "./routes/cars.js";
import guideRoute from "./routes/guides.js";
import destRoute from "./routes/dests.js";
import complaintRoute from "./routes/complaints.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: "*",
};

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/rests", restRoute);
app.use("/api/v1/cars", carRoute);
app.use("/api/v1/guides", guideRoute);
app.use("/api/v1/dests", destRoute);
app.use("/api/v1/complaints", complaintRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});

import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  complaint: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Complaint", ComplaintSchema);

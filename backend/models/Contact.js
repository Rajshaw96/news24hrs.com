import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);

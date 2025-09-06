import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  newsId: { type: String, required: true },   // from browser URL
  newsTitle: { type: String },                // optional
  userName: { type: String },
  email: { type: String },
  message: { type: String, required: true },
  replies: [replySchema],                     // nested replies
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Comment", commentSchema);

import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  url: { type: String, unique: true }, // ensure no duplicates
  image: String,
  publishedAt: Date,
  source: {
    name: String,
    url: String
  },
  category: String // optional, but useful for filtering
}, { timestamps: true });

// ✅ Compound index for category filtering & date sorting
newsSchema.index({ category: 1, publishedAt: -1 });

// ✅ Text index for fast search
newsSchema.index({ title: "text", description: "text" });

export default mongoose.model("News", newsSchema);

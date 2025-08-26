import express from "express";
import Comment from "../models/Comment";

const router = express.Router();

// ✅ Create a new comment
router.post("/", async (req, res) => {
  try {
    const { newsId, newsTitle, userName, email, message } = req.body;
    const newComment = new Comment({ newsId, newsTitle, userName, email, message });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get all comments for a news article
router.get("/:newsId", async (req, res) => {
  try {
    const comments = await Comment.find({ newsId: req.params.newsId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update a comment
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete a comment
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Add a reply to a comment
router.post("/:id/reply", async (req, res) => {
  try {
    const { userName, email, message } = req.body;
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    comment.replies.push({ userName, email, message });
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

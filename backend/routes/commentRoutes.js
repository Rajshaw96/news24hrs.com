import express from "express";
import {
  createComment,
  getCommentsByNews,
  updateComment,
  deleteComment,
  addReply
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/", createComment);            // Create comment
router.get("/:newsId", getCommentsByNews);  // Get all comments for a news
router.put("/:id", updateComment);          // Update comment
router.delete("/:id", deleteComment);       // Delete comment
router.post("/:id/reply", addReply);        // Add reply to a comment

export default router;

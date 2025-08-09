import express from "express";
import {
  fetchAndStoreNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
  getNews
} from "../controllers/newsController.js";

const router = express.Router();

router.get("/fetch", fetchAndStoreNews);
router.get("/", getAllNews);
router.get("/:id", getNewsById);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);
router.get("/", getNews);

export default router;

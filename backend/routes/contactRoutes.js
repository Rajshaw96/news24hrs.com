import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);        // Create
router.get("/", getContacts);           // Read all
router.get("/:id", getContactById);     // Read one
router.put("/:id", updateContact);      // Update
router.delete("/:id", deleteContact);   // Delete

export default router;

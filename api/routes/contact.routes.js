import express from "express";
import {
  submitContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/submit", submitContact);
router.get("/", getContacts);
router.get("/:id", getContactById);
router.delete("/:id", deleteContact);

export default router;

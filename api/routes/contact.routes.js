import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/create", createContact);
router.get("/", getContacts);
router.get("/:id", getContactById);
router.delete("/:id", deleteContact);

export default router;

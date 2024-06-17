import express from "express";
import {
  checkEmail,
  createCandidate,
} from "../controllers/candidates.controller.js";

const router = express.Router();

router.post("/", createCandidate);
router.post("/check-email", checkEmail);

export default router;

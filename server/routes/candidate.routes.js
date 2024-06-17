import express from "express";
import {
  checkEmail,
  createCandidate,
  updateCandidateInfo,
} from "../controllers/candidates.controller.js";

const router = express.Router();

router.post("/", createCandidate);
router.post("/check-email", checkEmail);
router.put("/update", updateCandidateInfo);

export default router;

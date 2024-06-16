import express from "express";
import { createCandidate } from "../controllers/candidates.controller.js";

const router = express.Router();

router.post("/", createCandidate);

export default router;

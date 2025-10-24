// routes/aiRoutes.js
import express from "express";
import { processAIRequest } from "../controllers/aiController.js";

const router = express.Router();

// POST /ai — handles AI-related requests
router.post("/", processAIRequest);

export default router;

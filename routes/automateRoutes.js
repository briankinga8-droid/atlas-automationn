// routes/automateRoutes.js
import express from "express";
import { runAutomation } from "../controllers/automateController.js";

const router = express.Router();

router.post("/", runAutomation);

export default router;

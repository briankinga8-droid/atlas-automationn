import express from "express";
import { handleAutomation } from "../controllers/automateController.js";

const router = express.Router();

router.post("/", handleAutomation);

export default router;

import express from "express";
import dotenv from "dotenv";

import automateRoutes from "./routes/automateRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

// Health check route
app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message: "🚀 Atlas Automation API is running..."
  });
});

// ✅ Connect route files
app.use("/automate", automateRoutes);
app.use("/ai", aiRoutes);
app.use("/webhook", webhookRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Atlas Automation API running on port ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

// Status route
app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message: "🚀 Atlas Automation API is running..."
  });
});

// Automation route
app.post("/automate", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });
  res.json({ message: `Automation task '${task}' received and being processed.` });
});

// AI route
app.post("/ai", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });
  res.json({ response: `AI response for: '${prompt}'` });
});

// Webhook route
app.post("/webhook", (req, res) => {
  console.log("Received webhook data:", req.body);
  res.json({ message: "Webhook received successfully!" });
});

// ✅ Only one PORT declaration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Atlas Automation API running on port ${PORT}`);
});

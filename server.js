import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

// Status check
app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message: "🚀 Atlas Automation API is running...",
  });
});

// Automation route
app.post("/automate", (req, res) => {
  const { task } = req.body;
  res.json({
    success: true,
    message: `🤖 Automation triggered for task: ${task || "undefined task"}`,
  });
});

// AI route
app.post("/ai", (req, res) => {
  const { query } = req.body;
  res.json({
    success: true,
    reply: `🧠 Atlas AI received your query: "${query}"`,
  });
});

// Webhook route
app.post("/webhook", (req, res) => {
  const { source, data } = req.body;
  res.json({
    success: true,
    message: `📡 Webhook received from ${source || "unknown source"}`,
    data,
  });
});

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Atlas Automation API running on port ${PORT}`);
});


// ✅ This part is very important for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});


import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Root route
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
app.get("/automate", (req, res) => {
  res.json({
    task: "automation",
    message: "🧠 Atlas Automation endpoint active and ready!"
  });
});

// AI route
app.get("/ai", (req, res) => {
  res.json({
    task: "ai",
    message: "🤖 Atlas AI endpoint operational!"
  });
});

// Webhook route
app.post("/webhook", (req, res) => {
  const data = req.body;
  res.json({
    task: "webhook",
    message: "📡 Webhook received successfully!",
    receivedData: data
  });
});

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Atlas Automation API is live on port ${PORT}`);
});

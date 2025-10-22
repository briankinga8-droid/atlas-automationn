import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message: "🚀 Atlas Automation API is running..."
  });
});

// ✅ This part is very important for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});


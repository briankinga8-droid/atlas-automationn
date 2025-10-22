import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ Default route
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

// ✅ Example endpoint: /api

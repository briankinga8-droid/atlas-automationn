import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

// Keep server running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

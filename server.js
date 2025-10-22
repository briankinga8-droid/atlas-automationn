import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Atlas Automation API is running...");
});

// ✅ Status route
app.get("/status", (req, res) => {
  res.json({
    status: "✅ Atlas Automation API is live and operational.",
    timestamp: new Date().toLocaleString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

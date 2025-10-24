// controllers/automateController.js
export const handleAutomation = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: "Missing 'task' in request body." });
    }

    // Simulate automation processing
    res.json({
      success: true,
      message: `✅ Automation task '${task}' executed successfully by Atlas.`
    });
  } catch (error) {
    console.error("Automation Error:", error);
    res.status(500).json({ error: "Failed to execute automation." });
  }
};

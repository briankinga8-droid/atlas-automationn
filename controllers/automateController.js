// controllers/automateController.js
export const runAutomation = async (req, res) => {
  try {
    const { task, data } = req.body;

    console.log("⚙️ Automation request:", { task, data });

    // Example: Basic automation logic placeholder
    if (task === "greet") {
      return res.json({
        success: true,
        message: `Hello ${data?.name || "there"}! Atlas Automation is active.`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Automation '${task}' executed successfully.`,
    });
  } catch (error) {
    console.error("Automation Error:", error);
    res.status(500).json({ error: "Automation failed." });
  }
};

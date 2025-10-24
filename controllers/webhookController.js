// controllers/webhookController.js
export const handleWebhook = async (req, res) => {
  try {
    console.log("📩 Webhook received:", req.body);

    // Example: respond to automation events
    res.status(200).json({
      success: true,
      message: "Webhook received successfully.",
      data: req.body,
    });
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(500).json({ error: "Failed to handle webhook." });
  }
};

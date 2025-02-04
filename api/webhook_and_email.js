export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const payload = req.body;
      const { event, call } = payload;

      // Check if the event is "call_analyzed"
      if (event === "call_analyzed") {
        const { call_summary, custom_analysis_data } = call.call_analysis;

        // Email recipient and Loops.so API details
        const recipient = "recipient1@example.com";
        const loopsApiKey = "your-loops-api-key"; // Replace with your Loops.so API key
        const campaignId = "your-campaign-id"; // Replace with your campaign ID

        // Send email via Loops.so
        const response = await fetch("https://app.loops.so/api/v1/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loopsApiKey}`,
          },
          body: JSON.stringify({
            campaign_id: campaignId,
            to: recipient,
            data: {
              call_summary,
              custom_analysis_data,
            },
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Error sending email via Loops.so:", error);
          return res.status(500).json({ error: "Failed to send email" });
        }

        console.log("Email sent successfully");
        return res.status(200).json({ status: "Email sent" });
      }

      res.status(400).json({ message: "Event not handled" });
    } catch (error) {
      console.error("Error handling webhook:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(404).send("Not Found");
  }
}

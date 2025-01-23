import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = req.body;
    console.log(JSON.stringify(payload));

    if (payload.event === "call_analyzed") {
      const {
        call: {
          call_id,
          call_status,
          transcript,
          recording_url,
          call_analysis: {
            custom_analysis_data: {
              customer_name = "N/A",
              email_address = "N/A",
              target_pest = "N/A",
              scheduled_time = "N/A",
              user_phone_number = "N/A",
            } = {},
            call_summary = "N/A",
          } = {},
        },
      } = payload;

      // Email content
      const emailContent = `
        <h1>Call Analyzed Details</h1>
        <p><strong>Call ID:</strong> ${call_id}</p>
        <p><strong>Campaign Name:</strong> Mega Bee Rescues & Pest Control</p>
        <p><strong>Customer Name:</strong> ${customer_name}</p>
        <p><strong>Phone Number:</strong> ${user_phone_number}</p>
        <p><strong>Email:</strong> ${email_address}</p>
        <p><strong>Target Pest:</strong> ${target_pest}</p>
        <p><strong>Scheduled Date & Time:</strong> ${scheduled_time}</p>
        <p><strong>Call Status:</strong> ${call_status}</p>
        <p><strong>Summary:</strong> ${call_summary}</p>
        <p><strong>Transcript:</strong></p>
        <pre>${transcript}</pre>
        <p><strong>Recording:</strong> <a href="${recording_url}">Download</a></p>
      `;

      try {
        // Send email using Resend
        await resend.emails.send({
          from: "noreply@resend.dev",
          to: "santiago@sidetool.co",
          subject: "Call Analysis Report",
          html: emailContent,
        });

        console.log("Email sent successfully");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }

    res.status(200).send("Webhook processed");
  } else {
    res.status(404).send("Not Found");
  }
}

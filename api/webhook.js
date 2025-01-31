import { Resend } from "resend";
import supabase from "./supabaseClient"; // Asegúrate de que la ruta sea correcta.

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
          start_timestamp,
          end_timestamp,
          duration_ms,
          transcript,
          recording_url,
          call_analysis: {
            custom_analysis_data: {
              customer_name = "N/A",
              email_address = "N/A",
              target_pest = "N/A",
              scheduled_time = "N/A",
              user_phone_number = "N/A",
              user_address = "N/A",
              call_type = "N/A",
            } = {},
            call_summary = "N/A",
            user_sentiment = "N/A",
            agent_task_completion_rating = "N/A",
            call_completion_rating = "N/A",
          } = {},
        },
        call_cost: { combined_cost = "N/A" } = {},
      } = payload;

      // Convert timestamps to readable date & time
      const startTime = new Date(start_timestamp).toLocaleString();
      const duration = `${Math.floor(duration_ms / 60000)} mins ${(
        (duration_ms % 60000) /
        1000
      ).toFixed(0)} secs`;

      // Intentar guardar en Supabase primero
      const { data: supabaseData, error: supabaseError } = await supabase
        .from("calls")
        .insert([
          {
            call_id,
            call_status,
            start_timestamp,
            end_timestamp,
            duration: duration_ms,
            transcript,
            recording_url,
            customer_name,
            email_address,
            target_pest,
            scheduled_time,
            user_phone_number,
            user_address,
            call_type,
            call_summary,
            user_sentiment,
            agent_task_completion_rating,
            call_completion_rating,
            combined_cost,
            call_successful: call_status === "ended" ? true : false,
            call_cost: combined_cost,
            call_duration: duration,
            call_start_time: startTime,
            call_end_time: end_timestamp,
            call_transcript: transcript,
            call_recording_url: recording_url,
          },
        ]);

      if (supabaseError) {
        console.error("Supabase Storage Error:", supabaseError);
        return res
          .status(500)
          .json({ error: "Failed to save call data to Supabase" });
      }

      // Continuar con el envío del email
      const emailContent = `
        <h1>Call Analysis Report</h1>
        <p><strong>Date & Time:</strong> ${startTime}</p>
        <p><strong>Call ID:</strong> ${call_id}</p>
        <p><strong>Campaign Name:</strong> Mega Bee Rescues & Pest Control</p>
        <p><strong>Customer Name:</strong> ${customer_name}</p>
        <p><strong>Phone Number:</strong> ${user_phone_number}</p>
        <p><strong>Email:</strong> ${email_address}</p>
        <p><strong>Address:</strong> ${user_address}</p>
        <p><strong>Target Pest:</strong> ${target_pest}</p>
        <p><strong>Scheduled Date & Time:</strong> ${scheduled_time}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Cost:</strong> $${combined_cost}</p>
        <p><strong>Call Status:</strong> ${call_status}</p>
        <p><strong>Ticket Type:</strong> ${call_type}</p>
        <p><strong>Call Summary:</strong> ${call_summary}</p>
        <p><strong>User Sentiment:</strong> ${user_sentiment}</p>
        <p><strong>Call Successful:</strong> ${
          call_status === "ended" ? "Yes" : "No"
        }</p>
        <p><strong>Agent Task Completion:</strong> ${agent_task_completion_rating}</p>
        <p><strong>Call Completion:</strong> ${call_completion_rating}</p>
        <p><strong>Transcript:</strong></p>
        <pre>${transcript}</pre>
        <p><strong>Recording:</strong> <a href="${recording_url}">Download</a></p>
      `;

      try {
        // Send the email using Resend
        await resend.emails.send({
          from: "noreply@resend.dev",
          to: "santiago@sidetool.co",
          subject: "Call Analysis Report",
          html: emailContent,
        });
        console.log("Email sent successfully");
        res
          .status(200)
          .json({ message: "Email sent and data saved", supabaseData });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        res.status(500).json({ error: "Failed to send email", emailError });
      }
    } else {
      res.status(404).send("Not Found");
    }
  }
}

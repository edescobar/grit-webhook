import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Ensure the Resend API key is in your environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const payload = req.body;

    if (payload.event === 'call_analyzed') {
      // Extract necessary information
      const {
        call: {
          call_id,
          call_status,
          call_analysis: {
            custom_analysis_data: {
              customer_name,
              email_address,
              target_pest,
              scheduled_time
            } = {},
            call_summary
          } = {},
          recording_url
        }
      } = payload;

      const phoneNumber = payload.call.data?.phone_number || 'N/A';
      const address = payload.call.data?.address || 'N/A';
      const callType = payload.call.call_type || 'N/A';
      const campaignName = payload.call.campaign_name || 'N/A';

      // Email content
      const emailContent = `
        <h1>Call Analyzed Details</h1>
        <p><strong>Campaign Name:</strong> ${campaignName}</p>
        <p><strong>Customer Name:</strong> ${customer_name}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email_address}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Scheduled Date & Time:</strong> ${scheduled_time || 'N/A'}</p>
        <p><strong>Target Pest:</strong> ${target_pest}</p>
        <p><strong>Call Type:</strong> ${callType}</p>
        <p><strong>Call Status:</strong> ${call_status}</p>
        <p><strong>Summary:</strong> ${call_summary}</p>
        <p><strong>Recording:</strong> <a href="${recording_url}">Download</a></p>
      `;

      try {
        // Send email using Resend
        await resend.emails.send({
          from: 'Mega Bee <santiago@sidetool.co>', // Replace with your desired sender address
          to: 'santi_mille@hotmail.com',
          subject: 'Call Analysis Report',
          html: emailContent
        });

        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }

    res.status(200).send('Webhook processed');
  } else {
    res.status(404).send('Not Found');
  }
}

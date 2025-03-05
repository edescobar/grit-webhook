import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Expecting the incoming request to contain the phone number in req.body.number
    const { number } = req.body;
    if (!number) {
      return res
        .status(400)
        .json({ error: "Missing phone number in request body." });
    }

    // Query the partner_services table for a matching phone number
    const { data, error } = await supabase
      .from("partner_services")
      .select("*")
      .eq("number", number);

    if (error) {
      throw new Error(error.message);
    }

    if (!data || data.length === 0) {
      return res
        .status(404)
        .json({ error: "Company not found for the given phone number." });
    }

    // Assuming phone numbers are unique; take the first match.
    const company = data[0];

    // Return the company info so that your AI agent can complete its dynamic variables.
    return res.status(200).json({ company });
  } catch (err) {
    console.error("Error handling phone call:", err);
    return res.status(500).json({ error: err.message });
  }
}

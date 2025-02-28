import { createClient } from "@supabase/supabase-js";
import axios from "axios";

// Ensure these environment variables are set in your Vercel project settings
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const apiUrl = process.env.API_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function (req, res) {
  try {
    // Fetch data from the external API
    const response = await axios.get(apiUrl);
    if (!response.data) throw new Error("No data received from external API");

    // Log the data for debugging purposes (consider removing in production)
    console.log("Received data:", response.data);

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("company_data")
      .insert([{ data: response.data }]);

    if (error) {
      throw new Error(`Supabase insertion error: ${error.message}`);
    }

    res
      .status(200)
      .json({ message: "Data successfully inserted into Supabase.", data });
  } catch (error) {
    console.error("Failed to insert data:", error);
    res
      .status(500)
      .json({ error: error.message || "Failed to process request." });
  }
}

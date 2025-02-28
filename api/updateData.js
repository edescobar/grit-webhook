import { createClient } from "@supabase/supabase-js";
import axios from "axios";

// Environment variables (ensure these are set in your Vercel project settings)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const apiUrl = process.env.API_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function (req, res) {
  try {
    // Fetch data from the external API
    const { data } = await axios.get(apiUrl);
    if (!data) throw new Error("No data received from external API");

    const { error } = await supabase.from("company_data").insert([{ data }]);

    if (error) throw error;

    res
      .status(200)
      .json({ message: "Data successfully inserted into Supabase." });
  } catch (error) {
    console.error("Failed to insert data:", error);
    res
      .status(500)
      .json({ error: error.message || "Failed to process request." });
  }
}

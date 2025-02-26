import dotenv from "dotenv";
import path from "path";
import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabaseUrl, supabaseKey);

const apiUrl = process.env.API_URL;

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received:", req.body);
    res.status(200).json(req.body);
  } else {
    res.status(404).send("Not Found");
  }
}

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok)
      throw new Error("Failed to fetch API: " + response.status);
    const data = await response.json();
    console.log("API Data:", data);
    await insertData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function insertData(data) {
  try {
    if (!data || !data.overview) throw new Error("Invalid data structure");
    const { data: company, error: companyError } = await supabase
      .from("Companies")
      .insert([
        {
          name: data.overview.name,
          number: data.overview.number,
          website: data.overview.website,
          email: data.overview.email,
        },
      ]);

    if (companyError)
      throw new Error("Supabase error: " + JSON.stringify(companyError));
    console.log("Insert successful:", company);
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

fetchData();

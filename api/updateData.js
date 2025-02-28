import { createClient } from "@supabase/supabase-js";
import fetch from "node-fetch";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const apiUrl = process.env.API_URL;

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const jsonData = await response.json();
    await insertData(jsonData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

async function insertData(jsonData) {
  const { _id, overview, services } = jsonData;
  const { name, addresses, number, website, email } = overview;

  for (const service of services) {
    const { name: serviceName, enabled, pricing, protocols } = service;

    // 📌 Aquí evitamos stringify y pasamos los objetos JSON directamente
    const pricingInfo = pricing; // JSON puro
    const protocolInfo = protocols.schedule; // JSON puro

    const { data, error } = await supabase.from("partner_services").insert([
      {
        partner_id: _id,
        name,
        address: addresses.join("; "),
        number,
        website,
        email,
        service_name: serviceName,
        service_enabled: enabled,
        pricing_info: pricingInfo, // Ahora es un objeto JSON válido
        protocol_info: protocolInfo, // Ahora es un objeto JSON válido
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  }
}

fetchData();

// /pages/api/webhook.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

function stripHTML(html) {
  return html.replace(/<[^>]+>/g, "").trim();
}

async function insertData(jsonData) {
  const { _id, overview, services } = jsonData;
  if (!_id || !overview || !services) {
    throw new Error("Missing required fields (_id, overview, services).");
  }

  const { name, addresses, number, website, email } = overview;

  for (const service of services) {
    const { pricing, protocols, options } = service;
    if (!options?.name) {
      throw new Error("Missing service name in one of the services.");
    }

    // Clean up pricing info and flatten to a plain text string.
    // Also, extract the technique from the pricing info when a chart title is "Services:".
    let pricingInfo = pricing || [];
    let techniqueText = "";
    if (Array.isArray(pricingInfo)) {
      pricingInfo = pricingInfo.map((pricingItem) => {
        if (pricingItem.infoChart && Array.isArray(pricingItem.infoChart)) {
          const chartsText = pricingItem.infoChart.map((chart) => {
            const chartTitle =
              typeof chart.title === "string"
                ? stripHTML(chart.title)
                : chart.title;
            const chartContent =
              typeof chart.content === "string"
                ? stripHTML(chart.content)
                : chart.content;
            // Check if this chart contains the technique info.
            if (
              chartTitle.toLowerCase() === "services:" ||
              chartTitle.toLowerCase() === "services"
            ) {
              techniqueText = chartContent;
            }
            if (chartTitle && chartContent) {
              return `${chartTitle}: ${chartContent}`;
            } else {
              return chartTitle || chartContent || "";
            }
          });
          return chartsText.join("\n");
        }
        return "";
      });
      // Join all pricing items into one plain text string.
      pricingInfo = pricingInfo.join("\n\n");
    }

    // Clean up protocol info and flatten it to a plain text string.
    let protocolInfo = protocols?.schedule || {};
    if (typeof protocolInfo === "string") {
      try {
        protocolInfo = JSON.parse(protocolInfo);
      } catch (err) {
        throw new Error("Error parsing protocol info: " + err.message);
      }
    }
    if (protocolInfo.timeframes && Array.isArray(protocolInfo.timeframes)) {
      const timeframesText = protocolInfo.timeframes.map((tf) => {
        if (typeof tf.content === "string") {
          return stripHTML(tf.content);
        }
        return tf.content;
      });
      protocolInfo = timeframesText.join("\n");
    }

    // Insert into Supabase (including the new "technique" column)
    const { error } = await supabase.from("partner_services").insert([
      {
        partner_id: _id,
        name,
        address: (addresses || []).join("; "),
        number,
        website,
        email,
        service_name: options.name,
        service_enabled: options.enabled,
        pricing_info: pricingInfo,
        protocol_info: protocolInfo,
        technique: techniqueText, // new column with the extracted technique info
      },
    ]);

    if (error) {
      throw new Error(`Supabase insertion error: ${error.message}`);
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "Missing 'url' in request body." });
  }

  try {
    // Fetch data from the given URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Fetch error: ${response.status} - ${response.statusText}`
      );
    }

    // Parse JSON
    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new Error(`Invalid JSON response: ${err.message}`);
    }

    // Insert data
    await insertData(data);

    return res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ error: error.message });
  }
}

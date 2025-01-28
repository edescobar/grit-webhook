export default function handler(req, res) {
    const guatemalaTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Guatemala",
    });
  
    const currentHour = new Date(guatemalaTime).getHours();
  
    if (currentHour >= 6 && currentHour < 8) {
      return res.status(200).json({ result: "DESAYUNO" });
    } else {
      return res.status(200).json({ result: "ALMUERZO" });
    }
  }
  
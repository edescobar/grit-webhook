export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received");
    const { from_number, to_number } = req.body;

    if (!from_number && !to_number) {
      res
        .status(400)
        .json({ error: "Missing from_number and to_number in the payload" });
      return;
    }

    console.log("Received Call Details:", {
      from: from_number,
      to: to_number,
    });

    // Example response with dynamic variables
    const dynamicVariables = {
      user_name: "John Doe",
      user_email: "john.doe@example.com",
    };

    res.status(200).json(dynamicVariables);
  } else {
    res.status(404).send("Not Found");
  }
}

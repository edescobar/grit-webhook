const express = require('express');

const app = express();
app.use(express.json()); // Parse JSON payloads

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Received payload:', req.body);
  res.status(200).send('Webhook received');
});

// Default route for testing
app.get('/', (req, res) => {
  res.send('Webhook is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

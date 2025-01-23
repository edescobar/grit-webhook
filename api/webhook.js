export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Received payload:', JSON.stringify(req.body));
    res.status(200).send('Webhook received');
  } else {
    res.status(404).send('Not Found');
  }
}

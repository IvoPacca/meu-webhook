export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Webhook recebido:', req.body);

    return res.status(200).json({
      success: true,
      data: req.body
    });
  }

  return res.status(200).json({
    message: 'Webhook online'
  });
}

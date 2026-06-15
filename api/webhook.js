import { db } from '../lib/firebase';

export default async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {

    const evento = {
      method: req.method,
      headers: req.headers,
      body: req.body,
      date: new Date().toISOString()
    };

    await db.collection('webhooks').add(evento);

    console.log('Webhook guardado no Firebase');

    return res.status(200).json({
      success: true,
      saved: true
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }
}

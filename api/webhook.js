export default async function handler(req, res) {

  const evento = {
    method: req.method,
    headers: req.headers,
    body: req.body,
    date: new Date().toISOString()
  };

  console.log(JSON.stringify(evento, null, 2));

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  return res.status(200).json({ success: true, method: req.method }); }



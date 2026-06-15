let eventos = [];

export default function handler(req, res) {
  eventos.unshift({
    data: new Date().toISOString(),
    metodo: req.method,
    body: req.body
  });

  return res.status(200).json({ success: true });
}

export { eventos };

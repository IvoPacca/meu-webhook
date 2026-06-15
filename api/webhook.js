export default async function handler(req, res) {

  try {

    console.log("Método:", req.method);
    console.log("Body:", req.body);

    return res.status(200).json({
      success: true,
      message: "Recebido"
    });

  } catch (error) {

    console.error(error);

    return res.status(200).json({
      success: true
    });
  }

}

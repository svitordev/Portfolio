import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "vtexsilvas2@gmail.com",
    subject: `Mensagem de ${name}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send("Email enviado: " + info.response);
  } catch (error) {
    res.status(500).send(error);
  }
};

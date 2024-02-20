const { Router } = require("express");
const transporter = require("../../config/nodemailer");

const nodemailer = Router();

nodemailer.post("/", async (req, res) => {
  const { gmail, name } = req.body;
  await transporter.sendMail({
    from: "mensaje enviado por <casasigilosa30gmail.com>",
    to: gmail,
    subject: "mensaje desde entidad",
    html: `
    <h1>${name}</he>
    <p>Mensaje enviado por josex0desmedido</p>
    <button>Ingresar a la pagina</button>
    `,
  });
});

module.exports = nodemailer;

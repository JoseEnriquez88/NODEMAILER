const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "casasigilosa30@gmail.com", //aca iria cuenta de negocio
    pass: "weda rvkb dkhx evam ",
  },
});

transporter
  .verify()
  .then(() => console.log("Mail enviado con exito"))
  .catch((error) => console.error(error));

module.exports = transporter;

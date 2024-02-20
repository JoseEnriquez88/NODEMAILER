const express = require("express");
const cors = require("cors");
const nodemailer = require("./routes/nodemailerRouter.js");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/nodemailer", nodemailer);

module.exports = server;

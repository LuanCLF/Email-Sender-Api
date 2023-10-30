require('dotenv').config();

const nodemailer = require('nodemailer');

const transportador = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_SENHA,
  },
});

module.exports = transportador;

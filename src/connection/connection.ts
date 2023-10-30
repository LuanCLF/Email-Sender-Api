import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

dotenv.config();

console.log(process.env.EMAIL_PASS);

const sender: Transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_LOGIN as string,
    pass: process.env.EMAIL_PASS as string,
  },
});

export default sender;

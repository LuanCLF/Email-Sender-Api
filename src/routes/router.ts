import express from 'express';
import emailSender from '../controller/emailSender.controller';

const router = express();

router.post('/email', emailSender);

export { router };

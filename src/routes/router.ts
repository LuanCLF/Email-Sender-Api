import express from 'express';
import emailSender from '../controller/emailSender.controller';
import validationSchema from '../middlewares/validationSchema.middleware';
import emailSchema from '../schema/email.schema';

const router = express();

router.post('/email', validationSchema(emailSchema), emailSender);

export { router };

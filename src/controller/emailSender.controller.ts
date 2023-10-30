import { Request, Response } from 'express';
import EmailDto from '../dtos/email.dto';
import EmailService from '../services/email.services';

const emailSender = async (req: Request<{}, {}, EmailDto>, res: Response) => {
  EmailService(req.body);

  return res.status(202).json();
};

export default emailSender;

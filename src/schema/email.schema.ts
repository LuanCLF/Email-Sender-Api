import joi from 'joi';
import EmailDto from '../dtos/email.dto';

const emailSchema: joi.Schema<EmailDto> = joi.object({
  toEmail: joi.string().email().required().messages({
    'any.required': 'O campo toEmail é obrigatório.',
    'string.empty': 'O campo toEmail não pode estar vazio.',
  }),
  subject: joi.string().required().messages({
    'any.required': 'O campo subject é obrigatório.',
    'string.empty': 'O campo subject não pode estar vazio.',
  }),
  content: joi.string().required().messages({
    'any.required': 'O campo content é obrigatório.',
    'string.empty': 'O campo content não pode estar vazio.',
  }),
});

export default emailSchema;

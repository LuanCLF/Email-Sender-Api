import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationError, ValidationErrorItem } from 'joi';

const validationSchema =
  (joiSchema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    let errors: Array<string> = [];
    try {
      await joiSchema.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
      const joiError = error as ValidationError;
      errors = joiError.details.map((err: ValidationErrorItem) => err.message);
    }

    if (errors.length > 0) {
      return res.status(400).json({
        mensage: errors,
      });
    }
    return next();
  };

export default validationSchema;

import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validate = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.validate(req.body);

    if (result.error) {
        return res.status(400).json({
            message: result.error.details[0].message,
        });
    }

    next();
};

export default validate;

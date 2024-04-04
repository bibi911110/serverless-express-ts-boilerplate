import { Request, Response, NextFunction } from 'express';

class CustomError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);

        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    console.log(err);

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Error';

    return res.status(statusCode).json({
        message: errorMessage,
    });
};

export { CustomError, errorHandler };

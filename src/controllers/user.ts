import { NextFunction, Request, Response } from 'express';
import User from '../models/user';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.findAll();

        return res.json({
            users,
        });
    } catch (error) {
        next(error);
    }
};

export default {
    getAllUsers,
};

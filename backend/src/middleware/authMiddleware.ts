// Auth middleware placeholder
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { redisClient } from '../config/redis';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        const cachedToken = await redisClient.get(`user:${decoded.userId}:token`);

        if (cachedToken !== token) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = { id: decoded.userId };
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
// Validate middleware placeholder
import { Request, Response, NextFunction } from 'express';
import { z, AnyZodObject } from 'zod';
import { sendError } from '../utils/response';

export function validate(schema: AnyZodObject, handler: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            await handler(req, res, next);
        } catch (error) {
            sendError(res, error.message, 400);
        }
    };
}
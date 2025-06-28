// Error middleware placeholder
import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';
import { sendError } from '../utils/response';

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    logger.error(`Error: ${err.message}`, { stack: err.stack });
    sendError(res, err.message, err.name === 'UnauthorizedError' ? 401 : 500);
}
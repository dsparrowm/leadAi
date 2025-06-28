// Response utility placeholder
import { Response } from 'express';

export function sendSuccess(res: Response, data: any, status: number = 200) {
    res.status(status).json({ success: true, data });
}

export function sendError(res: Response, message: string, status: number = 400) {
    res.status(status).json({ success: false, error: message });
}
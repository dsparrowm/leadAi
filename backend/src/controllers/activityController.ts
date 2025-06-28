import { Request, Response } from 'express';
import { activityService } from '../services/activityService';
import { createActivitySchema } from '../schemas/activity.schema';
import { validate } from '../middleware/validateMiddleware';

export const activityController = {
    getActivities: async (req: Request, res: Response) => {
        const limit = parseInt(req.query.limit as string) || 10;
        const activities = await activityService.getRecentActivities(req.user.id, limit);
        res.json(activities);
    },

    createActivity: validate(createActivitySchema, async (req: Request, res: Response) => {
        const activity = await activityService.createActivity(req.user.id, req.body);
        res.status(201).json(activity);
    }),
};
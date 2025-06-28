import { Request, Response } from 'express';
import prisma from '../config/database';
import { logger } from '../config/logger';
import { updateProfileSchema, updatePreferencesSchema } from '../schemas/settings.schema';
import { validate } from '../middleware/validateMiddleware';

export const settingsController = {
    getProfile: async (req: Request, res: Response) => {
        const user = await prisma.user.findUniqueOrThrow({
            where: { id: req.user.id },
            select: { email: true, firstName: true, lastName: true },
        });
        res.json(user);
    },

    updateProfile: validate(updateProfileSchema, async (req: Request, res: Response) => {
        const user = await prisma.user.update({
            where: { id: req.user.id },
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            },
        });
        logger.info(`Profile updated for user: ${req.user.id}`);
        res.json(user);
    }),

    updatePreferences: validate(updatePreferencesSchema, async (req: Request, res: Response) => {
        const { theme, notifications } = req.body;
        const preferences = await prisma.preferences.upsert({
            where: { userId: req.user.id },
            update: { theme, notifications },
            create: {
                userId: req.user.id,
                theme,
                notifications,
            },
        });
        logger.info(`Preferences updated for user: ${req.user.id}`);
        res.json(preferences);
    }),

    getPreferences: async (req: Request, res: Response) => {
        const preferences = await prisma.preferences.findUnique({
            where: { userId: req.user.id },
        });
        res.json(preferences || { theme: 'LIGHT', notifications: { email: true, push: true } });
    },
};
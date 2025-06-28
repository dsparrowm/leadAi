// Activity service placeholder
import prisma from '../config/database';
import { redisClient } from '../config/redis';
import { logger } from '../config/logger';
import { ActivityType } from '@prisma/client';

interface ActivityInput {
    type: ActivityType;
    action: string;
    details: string;
    leadId?: string;
    campaignId?: string;
}

export const activityService = {
    async createActivity(userId: string, input: ActivityInput) {
        const activity = await prisma.activity.create({
            data: {
                ...input,
                userId,
            },
        });

        await redisClient.del(`user:${userId}:activities`);
        logger.info(`Activity created: ${activity.id}`);
        return activity;
    },

    async getRecentActivities(userId: string, limit: number = 10) {
        const cacheKey = `user:${userId}:activities:${limit}`;
        const cached = await redisClient.get(cacheKey);

        if (cached) {
            return JSON.parse(cached);
        }

        const activities = await prisma.activity.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: limit,
            include: {
                lead: { select: { name: true } },
                campaign: { select: { name: true } },
            },
        });

        await redisClient.set(cacheKey, JSON.stringify(activities), { EX: 300 });
        return activities;
    },
};
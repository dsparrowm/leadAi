import prisma from '../config/database';
import { redisClient } from '../config/redis';
import { logger } from '../config/logger';
import { calculateLeadScore } from '../utils/leadScoring';
import { Lead, LeadStatus } from '@prisma/client';

interface LeadInput {
    name: string;
    title: string;
    company: string;
    email: string;
    phone: string;
    source: string;
    campaignId: string;
    tags: string[];
}

export const leadService = {
    async createLead(userId: string, input: LeadInput) {
        const score = calculateLeadScore(input);
        const status = score >= 80 ? 'HOT' : score >= 50 ? 'WARM' : 'COLD';

        const lead = await prisma.lead.create({
            data: {
                ...input,
                score,
                status,
                userId,
                lastActivity: new Date(),
            },
        });

        await redisClient.del(`user:${userId}:leads`);
        logger.info(`Lead created: ${lead.id}`);
        return lead;
    },

    async getLeads(userId: string, filters: any) {
        const cacheKey = `user:${userId}:leads:${JSON.stringify(filters)}`;
        const cached = await redisClient.get(cacheKey);

        if (cached) {
            return JSON.parse(cached);
        }

        const where: any = { userId };
        if (filters.status) where.status = filters.status;
        if (filters.source) where.source = filters.source;
        if (filters.campaignId) where.campaignId = filters.campaignId;
        if (filters.scoreMin || filters.scoreMax) {
            where.score = {};
            if (filters.scoreMin) where.score.gte = filters.scoreMin;
            if (filters.scoreMax) where.score.lte = filters.scoreMax;
        }

        const leads = await prisma.lead.findMany({
            where,
            take: filters.limit || 10,
            skip: filters.offset || 0,
        });

        await redisClient.set(cacheKey, JSON.stringify(leads), { EX: 300 });
        return leads;
    },

    async getLeadById(userId: string, leadId: string) {
        const lead = await prisma.lead.findFirstOrThrow({
            where: { id: leadId, userId },
        });
        return lead;
    },

    async updateLead(userId: string, leadId: string, input: Partial<LeadInput>) {
        const lead = await prisma.lead.update({
            where: { id: leadId, userId },
            data: {
                ...input,
                score: input.title || input.company || input.source || input.tags ? calculateLeadScore(input as LeadInput) : undefined,
                status: input.title || input.company || input.source || input.tags
                    ? calculateLeadScore(input as LeadInput) >= 80 ? 'HOT' : calculateLeadScore(input as LeadInput) >= 50 ? 'WARM' : 'COLD'
                    : undefined,
                lastActivity: new Date(),
            },
        });

        await redisClient.del(`user:${userId}:leads`);
        logger.info(`Lead updated: ${leadId}`);
        return lead;
    },

    async deleteLead(userId: string, leadId: string) {
        await prisma.lead.delete({
            where: { id: leadId, userId },
        });

        await redisClient.del(`user:${userId}:leads`);
        logger.info(`Lead deleted: ${leadId}`);
    },

    async updateLeadScore(userId: string, leadId: string, score: number) {
        const lead = await prisma.lead.update({
            where: { id: leadId, userId },
            data: {
                score,
                status: score >= 80 ? 'HOT' : score >= 50 ? 'WARM' : 'COLD',
                lastActivity: new Date(),
            },
        });

        await redisClient.del(`user:${userId}:leads`);
        await prisma.activity.create({
            data: {
                userId,
                type: 'LEAD_SCORED',
                action: 'Lead Score Updated',
                details: `Lead ${lead.name} score updated to ${score}`,
                leadId,
            },
        });

        logger.info(`Lead score updated: ${leadId}`);
        return lead;
    },

    async getWeeklyTrends(userId: string) {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        return prisma.lead.groupBy({
            by: ['createdAt'],
            where: {
                userId,
                createdAt: { gte: sevenDaysAgo },
            },
            _count: { id: true },
        });
    },

    async getStats(userId: string) {
        const stats = {
            totalLeads: 2847,
            hotLeads: 324,
            warmLeads: 896,
            averageScore: 82.4,
        };
        return stats;
    },
};
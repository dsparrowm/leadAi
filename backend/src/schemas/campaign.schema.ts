import { z } from 'zod';

export const createCampaignSchema = z.object({
    name: z.string().min(1),
    status: z.enum(['ACTIVE', 'PAUSED', 'DRAFT']),
    platform: z.enum(['LINKEDIN', 'TWITTER', 'FACEBOOK', 'MULTI_PLATFORM']),
    budget: z.number().positive(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
});

export const updateCampaignSchema = createCampaignSchema.partial();
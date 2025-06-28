import { z } from 'zod';

export const createActivitySchema = z.object({
    type: z.enum(['LEAD_QUALIFIED', 'CAMPAIGN_MILESTONE', 'AI_OPTIMIZATION', 'LEAD_SCORED']),
    action: z.string().min(1),
    details: z.string().min(1),
    leadId: z.string().uuid().optional(),
    campaignId: z.string().uuid().optional(),
});
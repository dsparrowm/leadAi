import { z } from 'zod';

export const createLeadSchema = z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    company: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    source: z.enum(['LINKEDIN', 'TWITTER', 'FACEBOOK', 'INSTAGRAM']),
    campaignId: z.string().uuid(),
    tags: z.array(z.string()),
});

export const updateLeadSchema = createLeadSchema.partial();
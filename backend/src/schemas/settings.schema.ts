import { z } from 'zod';

export const updateProfileSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
});

export const updatePreferencesSchema = z.object({
    theme: z.enum(['DARK', 'LIGHT']),
    notifications: z.object({
        email: z.boolean(),
        push: z.boolean(),
    }),
});
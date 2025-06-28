// Campaign controller placeholder
import { Request, Response } from 'express';
import { campaignService } from '../services/campaignService';
import { createCampaignSchema, updateCampaignSchema } from '../schemas/campaign.schema';
import { validate } from '../middleware/validateMiddleware';
import { CampaignStatus, Platform } from '@prisma/client';

export const campaignController = {
    getCampaigns: async (req: Request, res: Response) => {
        const filters = {
            status: req.query.status as CampaignStatus,
            platform: req.query.platform as Platform,
            limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
            offset: req.query.offset ? parseInt(req.query.offset as string) : undefined,
        };
        const campaigns = await campaignService.getCampaigns(req.user.id, filters);
        res.json(campaigns);
    },

    createCampaign: validate(createCampaignSchema, async (req: Request, res: Response) => {
        const campaign = await campaignService.createCampaign(req.user.id, req.body);
        res.status(201).json(campaign);
    }),

    getCampaign: async (req: Request, res: Response) => {
        const campaign = await campaignService.getCampaignById(req.user.id, req.params.id);
        res.json(campaign);
    },

    updateCampaign: validate(updateCampaignSchema, async (req: Request, res: Response) => {
        const campaign = await campaignService.updateCampaign(req.user.id, req.params.id, req.body);
        res.json(campaign);
    }),

    deleteCampaign: async (req: Request, res: Response) => {
        await campaignService.deleteCampaign(req.user.id, req.params.id);
        res.status(204).send();
    },

    getStats: async (req: Request, res: Response) => {
        const stats = await campaignService.getStats(req.user.id);
        res.json(stats);
    },
};
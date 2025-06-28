// Lead controller placeholder
import { Request, Response } from 'express';
import { leadService } from '../services/leadService';
import { createLeadSchema, updateLeadSchema } from '../schemas/lead.schema';
import { validate } from '../middleware/validateMiddleware';

export const leadController = {
    getLeads: async (req: Request, res: Response) => {
        const filters = {
            status: req.query.status as string,
            source: req.query.source as string,
            campaignId: req.query.campaignId as string,
            scoreMin: parseInt(req.query.scoreMin as string),
            scoreMax: parseInt(req.query.scoreMax as string),
            limit: parseInt(req.query.limit as string),
            offset: parseInt(req.query.offset as string),
        };
        const leads = await leadService.getLeads(req.user.id, filters);
        res.json(leads);
    },

    createLead: validate(createLeadSchema, async (req: Request, res: Response) => {
        const lead = await leadService.createLead(req.user.id, req.body);
        res.status(201).json(lead);
    }),

    getLead: async (req: Request, res: Response) => {
        const lead = await leadService.getLeadById(req.user.id, req.params.id);
        res.json(lead);
    },

    updateLead: validate(updateLeadSchema, async (req: Request, res: Response) => {
        const lead = await leadService.updateLead(req.user.id, req.params.id, req.body);
        res.json(lead);
    }),

    deleteLead: async (req: Request, res: Response) => {
        await leadService.deleteLead(req.user.id, req.params.id);
        res.status(204).send();
    },

    getStats: async (req: Request, res: Response) => {
        const stats = await leadService.getStats(req.user.id);
        res.json(stats);
    },

    updateLeadScore: async (req: Request, res: Response) => {
        const lead = await leadService.updateLeadScore(req.user.id, req.params.id, req.body.score);
        res.json(lead);
    },
};
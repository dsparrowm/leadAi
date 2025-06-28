// Analytics controller placeholder
import { Request, Response } from 'express';
import { analyticsService } from '../services/analyticsService';

export const analyticsController = {
    getPerformance: async (req: Request, res: Response) => {
        const metrics = await analyticsService.getPerformanceMetrics(req.user.id);
        res.json(metrics);
    },

    getPlatforms: async (req: Request, res: Response) => {
        const platforms = await analyticsService.getPlatformDistribution(req.user.id);
        res.json(platforms);
    },

    getRoi: async (req: Request, res: Response) => {
        const roi = await analyticsService.getRoiAnalysis(req.user.id);
        res.json(roi);
    },

    getFunnel: async (req: Request, res: Response) => {
        const funnel = await analyticsService.getFunnelData(req.user.id);
        res.json(funnel);
    },

    exportReport: async (req: Request, res: Response) => {
        const report = await analyticsService.exportReport(req.user.id);
        res.json(report);
    },
};
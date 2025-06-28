// Dashboard controller placeholder
import { Request, Response } from 'express';
import { campaignService } from '../services/campaignService';
import { leadService } from '../services/leadService';
import { activityService } from '../services/activityService';

export const dashboardController = {
    async getStats(req: Request, res: Response) {
        const stats = {
            totalLeads: 2847,
            totalLeadsChange: 12,
            qualifiedLeads: 1249,
            qualifiedLeadsChange: 18,
            activeCampaigns: 8,
            activeCampaignsChange: 0,
            conversionRate: 43.8,
            conversionRateChange: 5.2,
        };
        res.json(stats);
    },

    async getCharts(req: Request, res: Response) {
        const weeklyLeadsChart = {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets: [{
                    label: 'Leads',
                    data: [120, 150, 180, 200, 170, 190, 210], // Mock data
                    borderColor: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.2)',
                    fill: true,
                }],
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true },
                },
            },
        };

        const campaignPerformanceChart = {
            type: 'bar',
            data: {
                labels: ['Campaign 1', 'Campaign 2', 'Campaign 3', 'Campaign 4'],
                datasets: [{
                    label: 'Leads',
                    data: [600, 400, 300, 200],
                    backgroundColor: ['#0077B5', '#1DA1F2', '#3B5998', '#C13584'],
                }],
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true },
                },
            },
        };
        const weeklyLeads = await leadService.getWeeklyTrends(req.user.id);
        const campaignPerformance = await campaignService.getPerformanceData(req.user.id);
        res.json({ weeklyLeads, campaignPerformance });
    },

    async getActivity(req: Request, res: Response) {
        const activities = await activityService.getRecentActivities(req.user.id);
        res.json(activities);
    },
};
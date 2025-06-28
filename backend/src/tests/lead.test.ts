// Lead test placeholder
import request from 'supertest';
import app from '../app';
import prisma from '../config/database';
import { redisClient } from '../config/redis';
import { authService } from '../services/authService';
import { campaignService } from '../services/campaignService';

describe('Lead API', () => {
    let token: string;
    let userId: string;
    let campaignId: string;

    beforeAll(async () => {
        await prisma.$connect();
        await redisClient.connect();

        // Register a test user
        const { user, token: authToken } = await authService.register({
            email: 'test5@example.com',
            password: 'password123',
            firstName: 'Test',
            lastName: 'User',
        });
        token = authToken;
        userId = user.id;

        // Create a test campaign
        const campaign = await campaignService.createCampaign(userId, {
            name: 'Test Campaign',
            status: 'ACTIVE',
            platform: 'LINKEDIN',
            budget: 1000,
            startDate: new Date(),
            endDate: new Date(Date.now() + 86400000),
        });
        campaignId = campaign.id;
    });

    afterAll(async () => {
        await prisma.$disconnect();
        await redisClient.disconnect();
    });

    it('should create a new lead', async () => {
        const res = await request(app)
            .post('/api/leads')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'John Doe',
                title: 'Marketing Director',
                company: 'Tech Corp',
                email: 'john.doe@techcorp.com',
                phone: '123-456-7890',
                source: 'LINKEDIN',
                campaignId,
                tags: ['decision-maker'],
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('John Doe');
        expect(res.body.status).toBe('HOT'); // Based on lead scoring
    });

    it('should get leads with filters', async () => {
        const res = await request(app)
            .get('/api/leads?status=HOT&limit=5')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get lead stats', async () => {
        const res = await request(app)
            .get('/api/leads/stats')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('totalLeads', 2847);
        expect(res.body).toHaveProperty('hotLeads', 324);
    });

    it('should update lead score', async () => {
        // First, create a lead
        const leadRes = await request(app)
            .post('/api/leads')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Jane Smith',
                title: 'Product Manager',
                company: 'Innovate Inc',
                email: 'jane.smith@innovate.com',
                phone: '987-654-3210',
                source: 'TWITTER',
                campaignId,
                tags: ['potential'],
            });

        const leadId = leadRes.body.id;

        const res = await request(app)
            .post(`/api/leads/${leadId}/score`)
            .set('Authorization', `Bearer ${token}`)
            .send({ score: 90 });

        expect(res.status).toBe(200);
        expect(res.body.score).toBe(90);
    });
});
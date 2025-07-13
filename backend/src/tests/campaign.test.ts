// Campaign test placeholder
/// <reference types="jest" />
import request from 'supertest';
import app from '../app';
import prisma from '../config/database';
import { redisClient } from '../config/redis';
import { authService } from '../services/authService';

describe('Campaign API', () => {
    let token: string;
    let userId: string;

    beforeAll(async () => {
        await prisma.$connect();
        await redisClient.connect();
        const { user, token: authToken } = await authService.register({
            email: 'test2@example.com',
            password: 'password123',
            firstName: 'Test',
            lastName: 'User',
        });
        token = authToken;
        userId = user.id;
    });

    afterAll(async () => {
        await prisma.$disconnect();
        await redisClient.disconnect();
    });

    it('should create a new campaign', async () => {
        const res = await request(app)
            .post('/api/campaigns')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Test Campaign',
                status: 'ACTIVE',
                platform: 'LINKEDIN',
                budget: 1000,
                startDate: new Date().toISOString(),
                endDate: new Date(Date.now() + 86400000).toISOString(),
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('Test Campaign');
    });
});
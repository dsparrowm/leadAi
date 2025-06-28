// Analytics test placeholder
import request from 'supertest';
import app from '../app';
import prisma from '../config/database';
import { redisClient } from '../config/redis';
import { authService } from '../services/authService';

describe('Analytics API', () => {
    let token: string;
    let userId: string;

    beforeAll(async () => {
        await prisma.$connect();
        await redisClient.connect();
        const { user, token: authToken } = await authService.register({
            email: 'test3@example.com',
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

    it('should get performance metrics', async () => {
        const res = await request(app)
            .get('/api/analytics/performance')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('totalRevenue', 48200);
        expect(res.body).toHaveProperty('roi', 385);
    });

    it('should export analytics report', async () => {
        const res = await request(app)
            .post('/api/analytics/export')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.text).toContain('Total Revenue,48200,22');
    });
});
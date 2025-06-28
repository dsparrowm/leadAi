// Auth test placeholder
import request from 'supertest';
import app from '../app';
import prisma from '../config/database';
import { redisClient } from '../config/redis';

describe('Auth API', () => {
    beforeAll(async () => {
        await prisma.$connect();
        await redisClient.connect();
    });

    afterAll(async () => {
        await prisma.$disconnect();
        await redisClient.disconnect();
    });

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('user');
        expect(res.body).toHaveProperty('token');
    });
});
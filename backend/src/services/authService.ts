// Auth service placeholder
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/database';
import { redisClient } from '../config/redis';
import { logger } from '../config/logger';
import { User } from '@prisma/client';

interface RegisterInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const authService = {
    async register(input: RegisterInput) {
        const { email, password, firstName, lastName } = input;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
            },
        });

        const token = this.generateToken(user.id);
        await redisClient.set(`user:${user.id}:token`, token, { EX: 3600 });

        logger.info(`User registered: ${email}`);
        return { user, token };
    },

    async login(email: string, password: string) {
        const user = await prisma.user.findFirstOrThrow({ where: { email } });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }

        const token = this.generateToken(user.id);
        await redisClient.set(`user:${user.id}:token`, token, { EX: 3600 });

        logger.info(`User logged in: ${email}`);
        return { user, token };
    },

    async logout(userId: string) {
        await redisClient.del(`user:${userId}:token`);
        logger.info(`User logged out: ${userId}`);
    },

    async getCurrentUser(userId: string) {
        return prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { id: true, email: true, firstName: true, lastName: true },
        });
    },

    async refreshToken(userId: string) {
        const user = await this.getCurrentUser(userId);
        const token = this.generateToken(user.id);
        await redisClient.set(`user:${user.id}:token`, token, { EX: 3600 });
        return token;
    },

    generateToken(userId: string): string {
        return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    },
};
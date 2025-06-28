// Redis configuration placeholder
import { createClient } from 'redis';
import { logger } from './logger';

export const redisClient = createClient({
    url: process.env.REDIS_URL,
});

export async function connectRedis() {
    try {
        await redisClient.connect();
        logger.info('Redis connected successfully');
    } catch (error) {
        logger.error('Redis connection failed:', error);
        process.exit(1);
    }
}

export async function disconnectRedis() {
    await redisClient.disconnect();
}
import express, { Application } from 'express';
import { connectDB, disconnectDB } from './config/database';
import { connectRedis, disconnectRedis } from './config/redis';
import { logger } from './config/logger';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import authRoutes from './routes/authRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import campaignRoutes from './routes/campaignRoutes';
import leadRoutes from './routes/leadRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import settingsRoutes from './routes/settingsRoutes';
import activityRoutes from './routes/activityRoutes';
import errorMiddleware from './middleware/errorMiddleware';
import { rateLimitMiddleware } from './middleware/rateLimitMiddleware';
import helmet from 'helmet';

const app: Application = express();

app.use(helmet());
app.use(express.json());
app.use(rateLimitMiddleware);

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/activities', activityRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();
        await connectRedis();
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (error) {
        logger.error('Server startup failed:', error);
        process.exit(1);
    }
}

startServer();

process.on('SIGTERM', async () => {
    logger.info('SIGTERM received. Shutting down gracefully...');
    await disconnectDB();
    await disconnectRedis();
    process.exit(0);
});

export default app;
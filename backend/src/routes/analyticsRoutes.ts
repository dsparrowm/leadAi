// Analytics routes placeholder
import express from 'express';
import { analyticsController } from '../controllers/analyticsController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/performance', analyticsController.getPerformance);
router.get('/platforms', analyticsController.getPlatforms);
router.get('/roi', analyticsController.getRoi);
router.get('/funnel', analyticsController.getFunnel);
router.post('/export', analyticsController.exportReport);

export default router;
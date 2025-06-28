// Dashboard routes placeholder
import express from 'express';
import { dashboardController } from '../controllers/dashboardController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/stats', dashboardController.getStats);
router.get('/charts', dashboardController.getCharts);
router.get('/activity', dashboardController.getActivity);

export default router;
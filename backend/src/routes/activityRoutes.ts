import express from 'express';
import { activityController } from '../controllers/activityController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/', activityController.getActivities);
router.post('/', activityController.createActivity);

export default router;
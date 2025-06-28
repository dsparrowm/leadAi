import express from 'express';
import { settingsController } from '../controllers/settingsController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/profile', settingsController.getProfile);
router.put('/profile', settingsController.updateProfile);
router.get('/preferences', settingsController.getPreferences);
router.put('/preferences', settingsController.updatePreferences);

export default router;
// Lead routes placeholder
import express from 'express';
import { leadController } from '../controllers/leadController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/', leadController.getLeads);
router.post('/', leadController.createLead);
router.get('/:id', leadController.getLead);
router.put('/:id', leadController.updateLead);
router.delete('/:id', leadController.deleteLead);
router.get('/stats', leadController.getStats);
router.post('/:id/score', leadController.updateLeadScore);

export default router;
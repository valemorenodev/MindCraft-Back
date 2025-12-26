import { Router } from 'express';
import { getProgressByUser } from '../controllers/progress.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/user/:userId', authenticate,getProgressByUser);

export default router;

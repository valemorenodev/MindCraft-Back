import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/users.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authenticate, getUsers);
router.get('/:id', authenticate, getUserById);

export default router;
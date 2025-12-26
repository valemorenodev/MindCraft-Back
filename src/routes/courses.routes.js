import { Router } from 'express';
import { getCourses, getCourseById } from '../controllers/courses.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authenticate, getCourses);
router.get('/:id', authenticate, getCourseById);

export default router;

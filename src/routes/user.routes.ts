import express from 'express';
import { register, login } from '../controllers/user/user.controller';
import { validateRequest } from '../middleware/validate';
import { registerSchema, loginSchema } from '../validations/user.validation';

const router = express.Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);

export default router;

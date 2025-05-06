import express from 'express';
import { listActivities, bookActivity, getMyBookings, createActivity } from '../controllers/activity/activity.controller';
import { validateRequest } from '../middleware/validate';
import { bookActivitySchema, createActivitySchema } from '../validations/activity.validation';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', listActivities);
router.post('/', auth, validateRequest(createActivitySchema), createActivity);
router.post('/book', auth, validateRequest(bookActivitySchema), bookActivity);
router.get('/my-bookings', auth, getMyBookings);

export default router;

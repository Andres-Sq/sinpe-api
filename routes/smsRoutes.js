import express from 'express';
const router = express.Router();
import { createSMS } from '../controllers/smsController.js';

router.post('/create-sms', createSMS);

export default router;
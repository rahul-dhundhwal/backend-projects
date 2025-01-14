import express from 'express';
import { verifyEmail } from '../controllers/emailVerificationController.js';

const router =express.Router();

// route for email verification

router.get('/verify-email/:token',verifyEmail);

export default router;
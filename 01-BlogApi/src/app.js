import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import userRoutes from './routes/userRoutes.js';
import passwordResetRoutes from './routes/passwordResetRoutes.js';
import emailVerificationRoutes from './routes/emailVerificationRoutes.js';
import ratelimiter from './middlewares/rateLimiterMiddleware.js';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(ratelimiter);

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users',userRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/email-verification", emailVerificationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// TODO: create a sendEmail utility function that sends an email
// HINT: use the nodemailer package
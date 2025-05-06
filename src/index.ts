import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from './config';
import userRoutes from './routes/user.routes';
import activityRoutes from './routes/activity.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);

// MongoDB Connection
mongoose.connect(config.mongodbUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

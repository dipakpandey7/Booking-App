import mongoose, { Schema } from 'mongoose';
import { IActivity } from '../types/models';

const activitySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model<IActivity>('Activity', activitySchema);

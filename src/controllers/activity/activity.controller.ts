import { Request, Response } from 'express';
import Activity from '../../models/activity.model';
import Booking from '../../models/booking.model';
import { AuthRequest } from '../../types/auth';

export const createActivity = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description, location, dateTime } = req.body;

    const activity = new Activity({
      title,
      description,
      location,
      dateTime: new Date(dateTime)
    });

    await activity.save();

    res.status(201).json({ message: 'Activity created successfully', activity });
  } catch (error) {
    console.error('Create activity error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const listActivities = async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    console.error('List activities error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const bookActivity = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { activityId } = req.body;
    
    if (!req.user?.id) {
      res.status(401).json({ message: 'User not authenticated' });
      return;
    }
    const userId = req.user.id;

    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      res.status(404).json({ message: 'Activity not found' });
    return;
    }

    // Create booking
    const booking = new Booking({
      activity: activityId,
      user: userId,
      bookingDate: new Date()
    });

    await booking.save();

    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (error) {
    console.error('Book activity error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'User not authenticated' });
      return;
    }
    const userId = req.user.id;

    const bookings = await Booking.find({ user: userId })
      .populate('activity')
      .sort({ bookingDate: -1 });

    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

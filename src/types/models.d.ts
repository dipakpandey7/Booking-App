import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface IActivity extends Document {
  title: string;
  description: string;
  location: string;
  dateTime: Date;
}

export interface IBooking extends Document {
  activity: IActivity['_id'];
  user: IUser['_id'];
  bookingDate: Date;
}

import Joi from 'joi';

export const createActivitySchema = Joi.object({
  title: Joi.string().required().min(3).max(100),
  description: Joi.string().required().min(10).max(500),
  location: Joi.string().required().min(3).max(100),
  dateTime: Joi.date().iso().required().min('now')
});

export const bookActivitySchema = Joi.object({
  activityId: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
});

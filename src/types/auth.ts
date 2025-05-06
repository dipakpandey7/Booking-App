import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface AuthRequest extends Request {
  userId?: string;
  user?: {
    id: string;
  };
}

export interface JWTPayload extends JwtPayload {
  userId: string;
}

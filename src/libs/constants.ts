import { config } from 'dotenv';
config();

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:6969';
export const COUNTDOWN = process.env.NEXT_PUBLIC_COUNTDOWN === 'true';
export const CLIENT_ID = process.env.CLIENT_ID || "";

import dotenv from 'dotenv';

dotenv.config();

export const user = process.env.DB_USER;
export const host = process.env.DB_HOST;
export const password= process.env.DB_PASSWORD;
export const name = process.env.DB_NAME;
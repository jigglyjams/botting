import dotenv from 'dotenv';
dotenv.config();

console.log(`mode: ${process.env.NODE_ENV}`);

export const keys = {
  DISCORD_KEY: process.env.NODE_ENV === 'dev' ? process.env.DISCORD_KEY_DEV : process.env.DISCORD_KEY
};
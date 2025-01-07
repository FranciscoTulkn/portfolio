/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCES: process.env.ACCES_KEY_FORM,
  },
};

import dotenv from 'dotenv';
dotenv.config();

export default nextConfig;

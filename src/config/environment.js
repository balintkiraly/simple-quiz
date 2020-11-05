require('dotenv').config()

export const MONGODB_URL =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/db'
export const APP_PORT = process.env.APP_PORT || 3000

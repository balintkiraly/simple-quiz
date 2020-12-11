require('dotenv').config()
const devDB = process.env.MONGODB_URL || 'mongodb://mongoadmin:secret@localhost:27017/db'
const testDB = process.env.TEST_MONGODB_URL || 'mongodb://mongoadmin:secret@localhost:27017/db'

export const MONGODB_URL = process.env.NODE_ENV === 'test' ? testDB : devDB
export const APP_PORT = process.env.APP_PORT || 3000

export const emailOptions = {
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'youremail@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'yourpassword',
  },
}

export const url = (path) => `${process.env.APP_URL}${path}`

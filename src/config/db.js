import mongoose from 'mongoose'
import { config } from './config'

const db = mongoose.connection

db.on('error', error => {
  console.log(`MongoDB threw an exception: ${error}`)
  throw error
})

db.once('open', () => {
  console.log('Connected to the DB')
})

mongoose.connect(config.mongo_path, { useNewUrlParser: true }, error => {
  if (err) {
    console.log(`MongoDB connection can not be established. Error: ${error}`)
    throw error
  }
})

export default mongoose

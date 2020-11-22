import mongoose from 'mongoose'
import { MONGODB_URL } from './environment'

let db = mongoose.connection
mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err)
})

export default mongoose

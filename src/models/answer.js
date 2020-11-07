import mongoose from '../config/db'

export const Answer = mongoose.model(
  'Answer',
  new mongoose.Schema({
    content: String,
  }),
)

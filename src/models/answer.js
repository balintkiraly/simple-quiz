import mongoose from 'mongoose'

export const Answer = mongoose.model(
  'Answer',
  new Schema({
    content: String,
  }),
)

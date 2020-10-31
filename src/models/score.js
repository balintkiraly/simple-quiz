import mongoose from 'mongoose'

export const Score = mongoose.model(
  'Score',
  new Schema({
    percentage: Number,
    quiz: { type: Schema.Types.ObjectId, ref: 'Quiz' },
  }),
)

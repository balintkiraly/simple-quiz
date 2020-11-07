import mongoose from '../config/db'

export const Score = mongoose.model(
  'Score',
  new mongoose.Schema({
    percentage: Number,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  }),
)

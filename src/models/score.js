import mongoose from '../config/db'

export const Score = mongoose.model(
  'Score',
  new mongoose.Schema({
    percentage: {
      type: Number,
      required: true,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Quiz',
    },
  }),
)

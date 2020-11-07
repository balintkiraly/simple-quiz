import mongoose from '../config/db'

export const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    quizzes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Quiz',
      },
    ],
    scores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }],
  }),
)

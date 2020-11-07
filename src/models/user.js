import mongoose from '../config/db'

export const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    scores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }],
  }),
)

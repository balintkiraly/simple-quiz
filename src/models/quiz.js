import mongoose from '../config/db'

export const Quiz = mongoose.model(
  'Quiz',
  new mongoose.Schema({
    title: String,
    description: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  }),
)

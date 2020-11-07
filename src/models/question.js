import mongoose from '../config/db'

export const Question = mongoose.model(
  'Question',
  new mongoose.Schema({
    title: String,
    description: String,
    correctAnswer: {
      type: String,
      enum: ['a', 'b', 'c', 'd'],
    },
    answers: {
      a: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
      b: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
      c: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
      d: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    },
  }),
)

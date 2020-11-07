import mongoose from '../config/db'

export const Question = mongoose.model(
  'Question',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
      enum: ['a', 'b', 'c', 'd'],
    },
    answers: {
      a: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Answer',
      },
      b: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Answer',
      },
      c: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Answer',
      },
      d: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Answer',
      },
    },
  }),
)

import mongoose from '../config/db'

export const Question = mongoose.model(
  'Question',
  new mongoose.Schema({
    title: {
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
        content: {
          type: String,
          required: true,
        },
      },
      b: {
        content: {
          type: String,
          required: true,
        },
      },
      c: {
        content: {
          type: String,
          required: true,
        },
      },
      d: {
        content: {
          type: String,
          required: true,
        },
      },
    },
  }),
)

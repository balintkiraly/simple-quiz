import mongoose from '../config/db'

export const Quiz = mongoose.model(
  'Quiz',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPublic: {
      type: Boolean,
      required: true,
      default: true,
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  }),
)

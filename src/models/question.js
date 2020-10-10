export const Question = mongoose.model(
  'Question',
  new Schema({
    title: String,
    description: String,
    correctAnswer: {
      type: String,
      enum: ['a', 'b', 'c', 'd'],
    },
    answers: {
      a: { type: Schema.Types.ObjectId, ref: 'Answer' },
      b: { type: Schema.Types.ObjectId, ref: 'Answer' },
      c: { type: Schema.Types.ObjectId, ref: 'Answer' },
      d: { type: Schema.Types.ObjectId, ref: 'Answer' },
    },
  }),
)

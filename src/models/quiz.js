export const Quiz = mongoose.model(
  'Quiz',
  new Schema({
    title: String,
    description: String,
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  }),
)

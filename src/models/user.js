export const User = mongoose.model(
  'User',
  new Schema({
    name: String,
    email: String,
    password: String,
    quizzes: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
    scores: [{ type: Schema.Types.ObjectId, ref: 'Score' }],
  }),
)

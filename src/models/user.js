import mongoose from '../config/db'
import md5 from 'md5'

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
)
userSchema.virtual('avatar').get(function () {
  return `http://gravatar.com/avatar/${md5(this.email)}`
})
export const User = mongoose.model('User', userSchema)

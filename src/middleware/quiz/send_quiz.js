import { User, Quiz, Score } from '../../models'
import { getUserID } from '../../utils'

export const sendQuiz = async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id).populate('questions')

  let correct = 0
  quiz.questions.forEach((question) => {
    if (question.correctAnswer == req.body[`answer-${question.id}`]) {
      correct++
    }
  })

  req.quiz = quiz
  req.score = Math.round((correct / quiz.questions.length) * 100)

  // Save the score if the user logged in
  if (getUserID(req.session)) {
    const score = await Score.create({
      quiz: req.params.id,
      percentage: req.score,
    })

    await User.findByIdAndUpdate(
      getUserID(req.session),
      {
        $push: {
          scores: {
            _id: score._id,
          },
        },
      },
      { new: true, useFindAndModify: false },
    )
  }

  return next()
}

import { Quiz } from '../../models'

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

  // TODO: Save if logged in
  return next()
}

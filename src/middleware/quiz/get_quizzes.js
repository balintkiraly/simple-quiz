import { quizzes } from '../../mock/quiz'

export const getQuizzes = (req, _res, next) => {
  req.quizzes = quizzes
  next()
}

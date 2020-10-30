import { quizzes } from '../../mock/quiz'

export const getLatestQuizzes = (req, _res, next) => {
  const limit = 3

  req.latestQuizzes = quizzes.slice(0, limit)
  req.thereAreMore = quizzes.length > limit
  next()
}

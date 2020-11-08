import { Quiz } from '../../models'

export const getLatestQuizzes = (req, _res, next) => {
  const limit = 3

  req.latestQuizzes = await Quiz.find().limit(limit)
  req.thereAreMore = await Quiz.count() > limit
  next()
}

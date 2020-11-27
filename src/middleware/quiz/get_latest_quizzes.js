import { Quiz } from '../../models'

export const getLatestQuizzes = async (req, _res, next) => {
  const limit = 3

  req.latestQuizzes = await Quiz.find({ public: true }).limit(limit)
  req.thereAreMore = (await Quiz.countDocuments()) > limit
  next()
}

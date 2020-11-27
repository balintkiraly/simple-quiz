import { Quiz } from '../../models'

export const getLatestQuizzes = async (req, _res, next) => {
  const limit = 3

  req.latestQuizzes = await Quiz.find({ isPublic: true }).limit(limit)
  req.thereAreMore = (await Quiz.countDocuments({ isPublic: true })) > limit
  next()
}

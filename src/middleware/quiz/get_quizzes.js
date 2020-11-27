import { Quiz } from '../../models'

export const getQuizzes = async (req, _res, next) => {
  req.quizzes = await Quiz.find({ public: true })

  next()
}

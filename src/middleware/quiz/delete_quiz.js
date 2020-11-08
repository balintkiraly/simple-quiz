import { Quiz } from '../../models'

export const deleteQuiz = async (_req, _res, next) => {
  await Quiz.deleteOne({ id: req.params.id })

  next()
}

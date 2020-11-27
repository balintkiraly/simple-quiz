import { Quiz } from '../../models'

export const deleteQuiz = async (req, _res, next) => {
  await Quiz.findByIdAndDelete(req.params.id)

  return next()
}

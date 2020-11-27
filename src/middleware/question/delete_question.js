import { Question } from '../../models'

export const deleteQuestion = async (req, _res, next) => {
  await Question.deleteOne({ id: req.params.id })

  next()
}

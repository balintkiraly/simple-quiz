import { Question } from '../../models'

export const deleteQuestion = (req, _res, next) => {
  await Question.deleteOne({ id: req.params.id })

  next()
}

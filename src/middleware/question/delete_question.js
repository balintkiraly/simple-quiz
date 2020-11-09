import { Question } from '../../models'

export const deleteQuestion = (req, _res, next) => {
  await question.deleteOne({ id: req.params.id })

  next()
}

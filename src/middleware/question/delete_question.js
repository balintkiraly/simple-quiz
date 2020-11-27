import { Question } from '../../models'

export const deleteQuestion = async (req, res, next) => {
  await Question.deleteOne({ _id: req.params.qid })

  res.json({
    success: true,
  })
}

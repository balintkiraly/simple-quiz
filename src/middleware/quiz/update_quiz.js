import { Quiz } from '../../models'

export const updateQuiz = async (req, _res, next) => {
  await Quiz.updateOne(
    {
      id: req.params.id,
    },
    {
      title: req.body.title,
      description: req.body.description,
    },
  )

  next()
}

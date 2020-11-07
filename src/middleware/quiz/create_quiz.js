import { Quiz } from '../../models'

export const createQuiz = async (req, _res, next) => {
  await Quiz.create({
    title: req.body.title,
    description: req.body.description,
  })

  next()
}

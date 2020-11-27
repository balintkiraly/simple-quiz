import { Question } from '../../models'

export const updateQuestion = async (_req, _res, next) => {
  await Question.updateOne(
    {
      id: req.params.id,
    },
    {
      title: req.body.title,
      description: req.body.description,
      correctAnswer: req.body.correctAnswer,
      answers: {
        a: {
          content: req.body.answerA,
        },
        b: {
          content: req.body.answerB,
        },
        c: {
          content: req.body.answerC,
        },
        d: {
          content: req.body.answerD,
        },
      },
    },
  )

  next()
}

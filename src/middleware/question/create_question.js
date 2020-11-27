import { Question } from '../../models'

export const createQuestion = async (req, _res, next) => {
  await Question.create({
    title: req.body.title,
    correctAnswer: req.body.correctAnswer,
    answers: {
      a: {
        content: req.body.answers.a,
      },
      b: {
        content: req.body.answers.b,
      },
      c: {
        content: req.body.answers.c,
      },
      d: {
        content: req.body.answers.d,
      },
    },
  })

  return next()
}

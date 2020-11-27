import { Question } from '../../models'

export const updateQuestion = async (req, res, _next) => {
  const question = await Question.updateOne(
    { _id: req.params.qid },
    {
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
    },
  )

  res.json({
    answers: question.answers,
    correctAnswer: question.correctAnswer,
    title: question.title,
    id: question._id,
  })
}

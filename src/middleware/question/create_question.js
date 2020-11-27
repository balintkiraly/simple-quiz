import { Question, Quiz } from '../../models'

export const createQuestion = async (req, res, next) => {
  const question = await Question.create({
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
  await Quiz.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        questions: {
          _id: question._id,
        },
      },
    },
    { new: true, useFindAndModify: false },
  )

  res.json({
    answers: question.answers,
    correctAnswer: question.correctAnswer,
    title: question.title,
    id: question._id,
  })
}

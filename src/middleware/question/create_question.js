export const createQuestion = (_req, _res, next) => {
  
  const question = await Question.create({
    title: req.body.title,
    description: req.body.description,
    correctAnswer: req.body.correctAnswer,
    answers: {
      a: {
        content: req.body.answerA
      },
      b: {
        content: req.body.answerB
      },
      c: {
        content: req.body.answerC
      },
      d: {
        content: req.body.answerD
      }
    }
  })

  next()
}

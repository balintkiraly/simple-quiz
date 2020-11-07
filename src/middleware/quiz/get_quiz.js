import { Quiz } from '../../models'

export const getQuiz = async (req, res, next) => {
  req.quiz = await Quiz.find({ id: req.params.id })

  if (req.quiz) {
    next()
  } else {
    res.render('errors/404')
  }
}

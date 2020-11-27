import { Quiz } from '../../models'

export const getQuiz = async (req, res, next) => {
  req.quiz = await Quiz.findById(req.params.id).populate('questions')

  if (req.quiz) {
    next()
  } else {
    res.render('errors/404')
  }
}

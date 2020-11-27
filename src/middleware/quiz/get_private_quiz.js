import { Quiz } from '../../models'

export const getPrivateQuiz = async (req, res, next) => {
  req.quiz = await Quiz.find({ code: req.params.code }).populate('questions')

  if (req.quiz) {
    next()
  } else {
    res.render('errors/404')
  }
}

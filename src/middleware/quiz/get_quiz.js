import { quizzes } from '../../mock/quiz'

export const getQuiz = (req, res, next) => {
  req.quiz = quizzes.find((quiz) => quiz.id == req.params.id)
  
  if(req.quiz) {
    next()
  } else {
    res.render('errors/404')
  }
}

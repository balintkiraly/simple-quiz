import { Quiz } from '../../models'
import { getUserID } from '../../utils'

export const isOwnQuiz = async (req, res, next) => {
  const quiz = await Quiz.find({
    id: req.params.id,
    owner: getUserID(req.session),
  })

  if (quiz) {
    next()
  } else {
    res.render('errors/401')
  }
}

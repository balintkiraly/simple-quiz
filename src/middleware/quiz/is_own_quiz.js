import { Quiz } from '../../models'
import { getUserID } from '../../utils'

export const isQuizOwner = (req, _res, next) => {
  req.quiz = await Quiz.find({ id: req.params.id, owner: getUserID(req.session) })

  if (req.quiz) {
    next()
  } else {
    res.render('errors/401')
  }
}

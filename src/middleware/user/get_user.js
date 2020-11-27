import { User } from '../../models'
import { getUserID } from '../../utils'

export const getUser = async (req, res, next) => {
  req.user = await User.findById(getUserID(req.session)).populate({
    path: 'scores',
    populate: {
      path: 'quiz',
      model: 'Quiz',
    },
  })

  if (req.user) {
    next()
  } else {
    res.render('errors/404')
  }
}

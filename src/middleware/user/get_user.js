import { User } from '../../models'
import { getUserID } from '../../utils'

export const getUser = (req, _res, next) => {
  req.user = User.find({ id: getUserID(req.session) })

  if (req.user) {
    next()
  } else {
    res.render('errors/404')
  }
}

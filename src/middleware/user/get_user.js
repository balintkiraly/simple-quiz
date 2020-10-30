import { users } from "../../mock/user"
import { getUserID } from "../../utils"

export const getUser = (req, _res, next) => {
  req.user = users.find((user) => user.id == getUserID())

  if(req.user) {
    next()
  } else {
    res.render('errors/404')
  }
}

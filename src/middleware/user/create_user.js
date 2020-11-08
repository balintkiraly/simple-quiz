import { User } from '../../models'
import { hash } from 'bcrypt'

export const createUser = async (req, res, _next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: await hash(req.body.password, 10),
  })

  req.session.user = user
  res.redirect('/')
}

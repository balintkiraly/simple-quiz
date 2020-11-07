import { User } from '../../models'
import { compare } from 'bcrypt'

const wrongEmailOrPassword = (req, res, _next) => {
  req.flash('error', 'Wrong email or password')

  res.redirect('/auth/login')
}

export const login = async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  })
  if (!user) wrongEmailOrPassword(req, res, next)

  const passwordIsCorrect = await compare(req.body.password, user.password)

  if (!passwordIsCorrect) wrongEmailOrPassword(req, res, next)

  req.session.user = user
  res.redirect('/')
}

import { hash } from 'bcrypt'
import { User } from '../../models'

export const resetPassword = async (req, res, _next) => {
  const user = await User.findOne({
    passwordToken: req.body.token,
  })
  if (!user) {
    req.flash('error', 'Wrong token')
    res.redirect('/auth/forgot-password')
  }

  const user2 = await User.updateOne(
    {
      passwordToken: req.body.token,
    },
    {
      passwordToken: ' ',
      password: await hash(req.body.password, 10),
    },
  )

  req.flash('success', 'Now you can login with the new password')
  res.redirect('/auth/login')
}

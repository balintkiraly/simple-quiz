import { v4 as uuid } from 'uuid'
import { User } from '../../models'
import { sendResetPasswordMail } from '../../utils'

export const sendPasswordReset = async (req, res, _next) => {
  const user = await User.findOne({
    email: req.body.email,
  })
  if (!user) {
    req.flash('error', 'Email address not found in our DataBase!')
    res.redirect('/auth/forgot-password')
  }
  const token = uuid()

  const updatedUser = await User.updateOne(
    {
      email: req.body.email,
    },
    {
      passwordToken: token,
    },
  )
  sendResetPasswordMail(user.email, token)

  req.flash('success', 'Check your emails ;)')
  res.redirect('/')
}

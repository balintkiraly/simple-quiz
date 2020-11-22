import { hash } from 'bcrypt'
import { User } from '../../models'

export const updatePassword = async (req, res, _next) => {
  await User.updateOne(
    {
      id: req.params.id,
    },
    {
      password: await hash(req.body.password, 10),
    },
  )

  res.redirect('/user/profile')
}

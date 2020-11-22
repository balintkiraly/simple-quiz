import { Router } from 'express'
import { getUser, updatePassword } from '../middleware/user'
import { passwordValidator } from '../validators'
import { validate } from '../utils'

const router = Router()

router.get('/profile', getUser, (req, res) => {
  res.render('user/profile', { user: req.user })
})

router.post(
  '/password',
  validate(passwordValidator, 'user/profile'),
  updatePassword,
)

export default router

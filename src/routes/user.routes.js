import { Router } from 'express'
import { getUser, updatePassword } from '../middleware/user'
import { passwordValidator } from '../validators'
import { validate } from '../utils'
import { isAuthenticated } from '../middleware/auth'

const router = Router()

router.get('/profile', isAuthenticated, getUser, (req, res) => {
  res.render('user/profile', { user: req.user })
})

router.post(
  '/password',
  isAuthenticated,
  validate(passwordValidator, 'user/profile'),
  updatePassword,
)

export default router

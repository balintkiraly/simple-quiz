import { Router } from 'express'
import { login, logout, resetPassword } from '../middleware/auth'
import { createUser } from '../middleware/user'
import { validate } from '../utils'
import { registrationValidator } from '../validators'

const router = Router()

router.get('/login', (_req, res) => {
  res.render('auth/login')
})

router.get('/registration', (_req, res) => {
  res.render('auth/registration')
})

router.get('/forgot-password', (_req, res) => {
  res.render('auth/forgot-password')
})

router.post('/login', login)
router.post('/logout', logout)
router.post(
  '/registration',
  validate(registrationValidator, 'auth/registration'),
  createUser,
)
router.post('/reset_password', resetPassword)

export default router

import { Router } from 'express'
import { login, logout, reset_password } from '../middleware/auth'
import { createUser } from '../middleware/user'

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

routes.post('/login', login(req, res, next))
routes.post('/logout', logout(req, res, next))
routes.post('/registration', createUser(req, res, next))
routes.post('/reset_password', reset_password(req, res, next))

export default router

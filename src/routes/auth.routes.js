import { Router } from 'express'

const router = Router()

router.get('/login', (_req, res) => {
  res.render('auth/login')
})

router.get('/registration', (_req, res) => {
  res.render('auth/registration')
})

export default router

import { Router } from 'express'

const router = Router()

router.get('/profile', (_req, res) => {
  res.render('user/profile')
})


export default router

import { Router } from 'express'
import { getUser } from '../middleware/user'

const router = Router()

router.get('/profile', getUser, (req, res) => {
  res.render('user/profile', { user: req.user })
})

export default router

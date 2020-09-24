import { Router } from 'express'
import authRouter from './auth.routes'
import userRouter from './user.routes'
import quizRouter from './quiz.routes'

const router = Router()

router.get('/', (_req, res) => {
  res.render('index')
})

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/quiz', quizRouter);

export default router

import { Router } from 'express'
import { createQuiz, deleteQuiz, updateQuiz, getQuizzes, getQuiz } from '../middleware/quiz'

const router = Router()

router.get('/', getQuizzes, (req, res) => {
  res.render('quiz/index', { quizzes: req.quizzes })
})

router.get('/success', (_req, res) => {
  res.render('quiz/success')
})

router.get('/new', (_req, res) => {
  res.render('quiz/new')
})

router.get('/:id', getQuiz, (req, res) => {
  res.render('quiz/show', { quiz: req.quiz })
})

router.get('/:id/edit', getQuiz, (req, res) => {
  res.render('quiz/edit', { quiz: req.quiz })
})

router.post('/', createQuiz)
router.put('/:id', updateQuiz)
router.delete('/:id', deleteQuiz)

export default router

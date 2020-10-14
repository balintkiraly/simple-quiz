import { Router } from 'express'
import { createQuiz, deleteQuiz, updateQuiz } from '../middleware/quiz'

const router = Router()

router.get('/', (_req, res) => {
  res.render('quiz/index')
})

router.get('/show', (_req, res) => {
  res.render('quiz/show')
})

router.get('/success', (_req, res) => {
  res.render('quiz/success')
})

router.get('/new', (_req, res) => {
  res.render('quiz/new')
})

router.get('/edit', (_req, res) => {
  res.render('quiz/edit')
})

router.post('/', createQuiz(req, res, next))
router.put('/:id', updateQuiz(req, res, next))
router.delete('/:id', deleteQuiz(req, res, next))

export default router

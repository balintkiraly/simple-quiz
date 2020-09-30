import { Router } from 'express'

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

export default router

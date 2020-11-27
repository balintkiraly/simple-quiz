import { Router } from 'express'
import {
  createQuestion,
  deleteQuestion,
  updateQuestion,
} from '../middleware/question'
import {
  createDraftQuiz,
  deleteQuiz,
  updateQuiz,
  getQuizzes,
  getQuiz,
  isOwnQuiz,
  sendQuiz,
} from '../middleware/quiz'
import { isAuthenticated } from '../middleware/auth'

const router = Router()

router.get('/', getQuizzes, (req, res) => {
  res.render('quiz/index', { quizzes: req.quizzes })
})

router.get('/new', isAuthenticated, createDraftQuiz, (req, res) => {
  res.render('quiz/edit', { quiz: req.quiz })
})

router.get('/:id', getQuiz, (req, res) => {
  res.render('quiz/show', { quiz: req.quiz })
})

router.get('/:id/edit', isAuthenticated, isOwnQuiz, getQuiz, (req, res) => {
  res.render('quiz/edit', { quiz: req.quiz })
})

router.post('/:id/submit', sendQuiz, (req, res) => {
  res.render('quiz/success', { score: req.score, quiz: req.quiz })
})
router.post('/:id/questions', isAuthenticated, isOwnQuiz, createQuestion)
router.put('/:id/questions/:qid', isAuthenticated, isOwnQuiz, updateQuestion)
router.delete('/:id/questions/:qid', isAuthenticated, isOwnQuiz, deleteQuestion)

router.put('/:id', isAuthenticated, isOwnQuiz, updateQuiz)
router.delete('/:id', isAuthenticated, isOwnQuiz, deleteQuiz)

export default router

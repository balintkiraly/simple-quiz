import { Router } from 'express'
import { body } from 'express-validator'
import { User } from '../models'
import { login, logout, resetPassword } from '../middleware/auth'
import { createUser } from '../middleware/user'
import { validate } from '../utils/validator'

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
  validate(
    [
      body('name').isString().notEmpty(),
      body('email')
        .isEmail()
        .custom((value) => {
          return new Promise((resolve, reject) => {
            User.findOne({ email: value }, function (err, user) {
              if (err) {
                reject(new Error('Server Error'))
              }
              if (Boolean(user)) {
                reject(new Error('E-mail already in use'))
              }
              resolve(true)
            })
          })
        }),
      body('password').isLength({ min: 6 }),
      body('passwordConfirmation').custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error('Password confirmation does not match password')
        }
        return true
      }),
    ],
    'auth/registration',
  ),
  createUser,
)
router.post('/reset_password', resetPassword)

export default router

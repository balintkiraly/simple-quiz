import { body } from 'express-validator'
import { User } from '../models'

export const registrationValidator = [
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
]

import { body } from 'express-validator'

export const passwordValidator = [
  body('password').isLength({ min: 6 }),
  body('passwordConfirmation').custom((value, { req }) => {
    if (value != req.body.password) {
      throw new Error('Password confirmation does not match password')
    }
    return true
  }),
]

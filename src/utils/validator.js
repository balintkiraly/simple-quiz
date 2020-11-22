import { validationResult } from 'express-validator'

export const validate = (validations, view) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    res.status(422).render(view, { errors: errors.array() })
  }
}

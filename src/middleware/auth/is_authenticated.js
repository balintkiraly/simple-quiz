import { getUserID } from '../../utils'

export const isAuthenticated = (req, res, next) => {
  const contentType = req.headers['content-type'] || ''

  const isAPICall = contentType.indexOf('application/json') !== -1
  const isFormPost = contentType.indexOf('multipart/form-data') !== -1

  if (getUserID(req.session)) {
    return next()
  } else if (isAPICall || isFormPost) {
    return res.sendStatus(401)
  }
  res.render('errors/401')
}

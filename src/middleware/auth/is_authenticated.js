export const isAuthenticated = (req, res, next) => {
  // Make sure the user is logged in
  contentType = req.headers['content-type'] || ''

  isAPICall = contentType.indexOf('application/json') !== -1
  isFormPost = contentType.indexOf('multipart/form-data') !== -1

  if (req.isAuthenticated()) {
    next()
  } else if (isAPICall || isFormPost) {
    return res.sendStatus(401)
  }
  res.render('error/not-authenticated')
}

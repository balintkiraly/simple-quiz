export const login = (_req, res, _next) => {
  // TODO: Check email+password and create session if necessary
  res.cookie('isLoggedIn', 1)
  res.redirect('/')
}

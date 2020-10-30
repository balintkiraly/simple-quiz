export const createUser = (_req, res, _next) => {
  // TODO: Create a new user
  res.cookie('isLoggedIn', 1)
  res.redirect('/')
}

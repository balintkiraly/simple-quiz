export const logout = (_req, res, _next) => {
  res.cookie('isLoggedIn', 0)
  res.redirect('/')
  // Destroy the session
  /* req.session.destroy((err) => {
    if (err) throw new Error(err)
    res.redirect('/')
  })
  */
}

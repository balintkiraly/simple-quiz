export const logout = (_req, res, _next) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) throw new Error(err)
    res.redirect('/')
  })
}

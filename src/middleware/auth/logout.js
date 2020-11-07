export const logout = (req, res, _next) => {
  req.session.destroy((err) => {
    if (err) throw new Error(err)
    res.redirect('/')
  })
}

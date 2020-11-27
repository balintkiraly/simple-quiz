import { Quiz } from '../../models'

export const updateQuiz = async (req, res, _next) => {
  await Quiz.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    isPublic: req.body.isPublic == 'on',
  })

  res.redirect(`/quiz/${req.params.id}/edit`)
}

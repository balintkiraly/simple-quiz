import { v4 as uuid } from 'uuid'
import { Quiz } from '../../models'
import { getUserID } from '../../utils'

export const createDraftQuiz = async (req, _res, next) => {
  req.quiz = await Quiz.create({
    title: 'Your quiz',
    description: 'Description of the quiz',
    owner: getUserID(req.session),
    isPublic: false,
    code: uuid(),
  })

  next()
}

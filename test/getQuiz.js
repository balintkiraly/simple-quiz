import { getQuiz } from '../src/middleware/quiz/get_quiz'
import { Quiz } from '../src/models'

var mongoose = require('mongoose')
const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);

let quizId

beforeEach( async () => {
  const quiz = await Quiz.create({
    title: 'Your quiz',
    description: 'Description of the quiz',
    owner: mongoose.Types.ObjectId(),
    isPublic: false,
    code: 'test-code',
  })
  quizId = quiz.id
})

afterEach( async () => {
  await Quiz.findByIdAndDelete(quizId)
})

describe('getQuiz middleware', () => {
  it('should call next and pass data', async () => {
    let req = { 
      body: {},
      params: {
        id: quizId
      },
    }

    let nextWrapper = {
      next: () => {} 
    }
    let res = {
      render: (view) => view
    }

    let nextSpy = chai.spy.on(nextWrapper, 'next')

    await getQuiz(req, res, () => nextWrapper.next())
    
    chai.expect(nextSpy).to.have.been.called()
    chai.expect(req.quiz.id).to.eq(quizId) 
  })

  it('should render error', async () => {
    let req = { 
      body: {},
      params: {
        id: mongoose.Types.ObjectId()
      },
    }
    let Next = {
      next: () => {} 
    }
    let res = {
      render: (view) => view
    }

    let resSpy = chai.spy.on(res, 'render')

    await getQuiz(req, res, () => Next.next())
    chai.expect(resSpy).to.have.been.called.with('errors/404')
  })
})

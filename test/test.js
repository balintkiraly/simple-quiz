import { isOwnQuiz } from '../src/middleware/quiz/is_own_quiz'
import { Quiz } from '../src/models'

var mongoose = require('mongoose')
const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);

let quizId
const userId = mongoose.Types.ObjectId()

beforeEach( async () => {
  const quiz = await Quiz.create({
    title: 'Your quiz',
    description: 'Description of the quiz',
    owner: userId,
    isPublic: false,
    code: 'test-code',
  })
  quizId = quiz.id
})

afterEach( async () => {
  await Quiz.findByIdAndDelete(quizId)
})

describe('sendQuiz middleware', () => {
  it('should call next', async () => {
    let req = { 
      body: {},
      params: {
        id: quizId
      },
      session: {
        user: {
          id: userId
        }
      }
    }

    let nextWrapper = {
      next: () => {} 
    }
    let res = {
      render: (view) => view
    }

    let nextSpy = chai.spy.on(nextWrapper, 'next')

    await isOwnQuiz(req, res, () => nextWrapper.next())
    chai.expect(nextSpy).to.have.been.called()
  
  })

  it('should render error', async () => {
    let req = { 
      body: {},
      params: {
        id: quizId
      },
      session: {
        user: {
          id: mongoose.Types.ObjectId()
        }
      }
    }
    let Next = {
      next: () => {} 
    }
    let res = {
      render: (view) => view
    }

    let resSpy = chai.spy.on(res, 'render')

    await isOwnQuiz(req, res, () => Next.next())
    chai.expect(resSpy).to.have.been.called()
  
  })
})

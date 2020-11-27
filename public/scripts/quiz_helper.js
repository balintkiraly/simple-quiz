const answerOptions = ['a', 'b', 'c', 'd']

const createOrUpdateQuestion = async (quizId, questionId = null) => {
  const namePrefix = questionId ? `${questionId}` : ''

  const corretAnswerRadioValue = [
    ...document.getElementsByName(`${namePrefix}answer`),
  ].map((a) => a.checked)

  const body = JSON.stringify({
    title: document.querySelector(`input[name="${namePrefix}title"]`).value,
    correctAnswer: answerOptions[corretAnswerRadioValue.indexOf(true)],
    answers: {
      a: document.querySelector(`input[name="${namePrefix}answerA"]`).value,
      b: document.querySelector(`input[name="${namePrefix}answerB"]`).value,
      c: document.querySelector(`input[name="${namePrefix}answerC"]`).value,
      d: document.querySelector(`input[name="${namePrefix}answerD"]`).value,
    },
  })

  const url = questionId
    ? `/quiz/${quizId}/questions/${questionId}`
    : `/quiz/${quizId}/questions`

  const method = questionId ? 'PUT' : 'POST'

  const response = await fetch(url, {
    method,
    body,
  })
  return response.json()
}

const deleteQuestion = async (quizId, questionId) => {
  const response = await fetch(`/quiz/${quizId}/questions/${questionId}`, {
    method: 'DELETE',
  })
  return response.json()
}

const updateQuiz = async (quizId, body) => {
  const response = await fetch(`/quiz/${quizId}`, {
    method: 'PUT',
    body,
  })
  return response.json()
}

const deleteQuiz = async (quizId) => {
  const response = await fetch(`/quiz/${quizId}`, {
    method: 'DELETE',
  })
  return response.json()
}

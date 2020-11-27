const createQuestion = async (quizId) => {
  const body = {}
  const response = await fetch(`/quiz/${quizId}/questions`, {
    method: 'POST',
    body,
  })
  return response.json()
}

const updateQuestion = async (quizId, questionId, body) => {
  const response = await fetch(`/quiz/${quizId}/questions/${questionId}`, {
    method: 'PUT',
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

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
  const data = await response.json()
  if (questionId) {
    // UPDATE
  } else {
    // add the new question to the DOM
    addQuestion({
      id: data._id,
      title: data.title,
      answers: data.answers,
      correctAnswer: data.correctAnswer,
      quizID: quizId,
    })
    // erease the form
    document.getElementsByName(`answer`).forEach((a) => (a.checked = false))
    document.querySelector(`input[name="${namePrefix}title"]`).value = ''
    document.querySelector(`input[name="${namePrefix}answerA"]`).value = ''
    document.querySelector(`input[name="${namePrefix}answerB"]`).value = ''
    document.querySelector(`input[name="${namePrefix}answerC"]`).value = ''
    document.querySelector(`input[name="${namePrefix}answerD"]`).value = ''
  }
}

const addQuestion = ({ id, title, answers, correctAnswer, quizID }) => {
  const question = `
  <div class="flex flex-row mt-3 w-full">
    <input
      class="appearance-none w-5/6 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      type="text"
      name="${id}title"
      value="${title}"
    />

    <div class="w-1/6 text-right">
      <button    
        onClick="deleteQuestion('${id}')"
        class="self-end shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        Remove
      </button>
    </div>
  </div>

  <hr />
  <div class="flex flex-col mt-3 w-full">
    <div class="flex flex-row w-full">
      <div class="w-5/6 text-gray-700 font-bold">Answer</div>
      <div class="w-1/6 text-center font-bold text-gray-700 self-end">
        Correct?
      </div>
    </div>
    <div class="flex flex-row my-2">
      <input
        class="w-5/6 self-center appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="text"
        name="${id}answerA"
        value="${answers.a.content}"
      />
      <div class="w-1/6 self-center text-center">
        <input
          type="radio"
          class="form-radio h-6 w-6 text-teal-600"
          ${correctAnswer == 'a' ? 'checked' : ''}"
          name="${id}answer"
        />
      </div>
    </div>

    <div class="flex flex-row my-2">
      <input
        class="w-5/6 self-center appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="text"
        name="${id}answerB"
        value="${answers.b.content}"
      />
      <div class="w-1/6 self-center text-center">
        <input
          type="radio"
          class="form-radio h-6 w-6 text-teal-600"
          ${correctAnswer == 'b' ? 'checked' : ''}"
          name="${id}answer"
        />
      </div>
    </div>

    <div class="flex flex-row my-2">
      <input
        class="w-5/6 self-center appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="text"
        name="${id}answerC"
        value="${answers.c.content}"
      />
      <div class="w-1/6 self-center text-center">
        <input
          type="radio"
          class="form-radio h-6 w-6 text-teal-600"
          ${correctAnswer == 'c' ? 'checked' : ''}"
          name="${id}answer"
        />
      </div>
    </div>

    <div class="flex flex-row my-2">
      <input
        class="w-5/6 self-center appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="text"
        name="${id}answerD"
        value="${answers.d.content}"
      />
      <div class="w-1/6 self-center text-center">
        <input
          type="radio"
          ${correctAnswer == 'd' ? 'checked' : ''}"
          class="form-radio h-6 w-6 text-teal-600"
          name="${id}answer"
        />
      </div>
    </div>

    <button
      class="self-center shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-6 my-4 rounded"
      onClick="createOrUpdateQuestion('${quizID}, ${id}')"
    >
      Update Question
    </button>
    <hr />
  </div>`

  document.getElementById('questions').innerHTML += question
}

const deleteQuestion = async (quizId, questionId) => {
  const response = await fetch(`/quiz/${quizId}/questions/${questionId}`, {
    method: 'DELETE',
  })
  return data
}

const updateQuiz = async (quizId, body) => {
  const response = await fetch(`/quiz/${quizId}`, {
    method: 'PUT',
    body,
  })
  return data
}

const deleteQuiz = async (quizId) => {
  const response = await fetch(`/quiz/${quizId}`, {
    method: 'DELETE',
  })
  return data
}

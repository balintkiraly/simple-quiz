const quizSteps = (allStep) => {
  const render = () => {
    for (let i = 0; i < allStep; i++) {
      document.getElementById(`step-${i}`).hidden = true
    }
    document.getElementById(`step-${currentStep}`).hidden = false
  }

  const onNextClick = () => {
    currentStep++
    if (currentStep >= allStep) {
      // TODO: Submit the form
      window.location.href = '/quiz/success'
    } else {
      render()
    }
  }

  let currentStep = 0
  document.getElementById('next-button').addEventListener('click', onNextClick)
  render()
}

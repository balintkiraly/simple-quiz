const quizSteps = (allStep) => {
  const render = () => {
    for (let i = 0; i < allStep; i++) {
      document.getElementById(`step-${i}`).hidden = true
    }
    document.getElementById(`step-${currentStep}`).hidden = false
  }

  const onNextClick = () => {
    currentStep++
    if (currentStep + 1 >= allStep) {
      document.getElementById('next-button').innerText = 'Submit'
    }
    if (currentStep >= allStep) {
      // Submit the form
      const form = document.getElementById('form')
      form.submit()
    } else {
      render()
    }
  }

  let currentStep = 0
  document.getElementById('next-button').addEventListener('click', onNextClick)
  render()
}

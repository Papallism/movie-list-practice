const modalElement = document.getElementById("add-modal")
const startAddMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")
const modalCancelButton = modalElement.querySelector(".btn--passive")
const modalAddMovieButton = modalElement.querySelector(".btn--success")
const userInputElements = modalElement.querySelectorAll("input")

function toggleBackdrop() {
  backdrop.classList.toggle('visible')
}

function toggleMovieModal() {
  modalElement.classList.toggle('visible')
  toggleBackdrop()
}

function backdropClickHandler() {
  toggleMovieModal()
}

function cancelAddMovie() {
  toggleMovieModal()
}

function addMovieHandler() {
  const titleInput = userInputElements[0].value.trim()
  const imageUrlInput = userInputElements[1].value.trim()
  const ratingInput = userInputElements[2].value.trim()

  if (titleInput === '' || imageUrlInput === '' || ratingInput === ''
  || +ratingInput < 1 || +ratingInput > 5) {
    alert("Enter valid values.")
  }
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
modalCancelButton.addEventListener('click', cancelAddMovie)
modalAddMovieButton.addEventListener('click', addMovieHandler)
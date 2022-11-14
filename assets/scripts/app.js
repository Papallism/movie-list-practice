const modalElement = document.getElementById("add-modal")
const startAddMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")
const modalCancelButton = modalElement.querySelector(".btn--passive")

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

function cancelAddMovie(params) {
  toggleMovieModal()
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
modalCancelButton.addEventListener('click', cancelAddMovie)
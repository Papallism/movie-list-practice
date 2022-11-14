const modalElement = document.getElementById("add-modal")
const startAddMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")

function toggleBackdrop() {
  backdrop.classList.toggle('visible')
}

function toggleMovieModal() {
  modalElement.classList.toggle('visible')
  toggleBackdrop()
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
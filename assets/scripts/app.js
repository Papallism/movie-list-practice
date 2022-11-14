const modalElement = document.getElementById("add-modal")
const startAddMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")
const modalCancelButton = modalElement.querySelector(".btn--passive")
const modalAddMovieButton = modalElement.querySelector(".btn--success")
const userInputElements = modalElement.querySelectorAll("input")
const movieEntriesElement = document.getElementById("entry-text")

const movies = []

function toggleBackdrop() {
  backdrop.classList.toggle('visible')
}

function toggleMovieModal() {
  modalElement.classList.toggle('visible')
  toggleBackdrop()
}

function backdropClickHandler() {
  toggleMovieModal()
  clearUserInputs()
}

function cancelAddMovieHandler() {
  toggleMovieModal()
  clearUserInputs()
}

function addMovieHandler() {
  const titleInput = userInputElements[0].value.trim()
  const imageUrlInput = userInputElements[1].value.trim()
  const ratingInput = userInputElements[2].value.trim()

  if (titleInput === '' || imageUrlInput === '' || ratingInput === ''
  || +ratingInput < 1 || +ratingInput > 5) {
    alert("Enter valid values.")
  }

  const newMovie = {
    title: titleInput,
    image: imageUrlInput,
    rating: ratingInput,
  }

  movies.push(newMovie)
  toggleMovieModal()
  clearUserInputs()
  updateUI()
  renderNewMovieElement(titleInput, imageUrlInput, ratingInput)
}

function clearUserInputs() {
  for (const input of userInputElements) {
    input.value = ''
  }
}

function updateUI() {
  if (movies.length === 0) {
    movieEntriesElement.style.display = 'none'
  } else {
    movieEntriesElement.style.display = 'block'
  }
}

function renderNewMovieElement(title, imageUrl, rating) {
  const newMovieElement = document.createElement('li')
  newMovieElement.className = 'movie-element'
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `

  const movieList = document.getElementById("movie-list")
  movieList.append(newMovieElement)
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
modalCancelButton.addEventListener('click', cancelAddMovieHandler)
modalAddMovieButton.addEventListener('click', addMovieHandler)
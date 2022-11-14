const modalElement = document.getElementById("add-modal")
const startAddMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")
const modalCancelButton = modalElement.querySelector(".btn--passive")
const modalAddMovieButton = modalElement.querySelector(".btn--success")
const userInputElements = modalElement.querySelectorAll("input")
const movieEntriesElement = document.getElementById("entry-text")
const movieList = document.getElementById("movie-list")
const deleteMovieModal = document.getElementById("delete-modal")

const movies = []

function openMovieModal() {
  modalElement.classList.add('visible')
  backdrop.classList.add('visible')
}

function closeMovieModal() {
  modalElement.classList.remove('visible')
  backdrop.classList.remove('visible')
}

function backdropClickHandler() {
  closeMovieModal()
  clearUserInputs()
  closeDeleteMovieModal()
}

function cancelAddMovieHandler() {
  closeMovieModal()
  clearUserInputs()
  backdrop.classList.remove('visible')
}

function addMovieHandler() {
  const titleInput = userInputElements[0].value.trim()
  const imageUrlInput = userInputElements[1].value.trim()
  const ratingInput = userInputElements[2].value.trim()

  if (titleInput === '' || imageUrlInput === '' || ratingInput === ''
  || +ratingInput < 1 || +ratingInput > 5) {
    alert("Enter valid values.")
    return
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleInput,
    image: imageUrlInput,
    rating: ratingInput,
  }

  movies.push(newMovie)
  closeMovieModal()
  clearUserInputs()
  updateUI()
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating)
  backdrop.classList.remove('visible')
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

function renderNewMovieElement(id, title, imageUrl, rating) {
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

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))

  movieList.append(newMovieElement)
}

function deleteMovie(movieId) {
  let movieIndex = 0
  for (const movie of movies) {
    if (movie.id === movieId) {
      break
    }
    movieIndex++
  }

  movies.splice(movieIndex, 1)

  movieList.children[movieIndex].remove()

  closeDeleteMovieModal()
  backdrop.classList.remove('visible')
}

function deleteMovieHandler(movieId) {
  deleteMovieModal.classList.add('visible')
  backdrop.classList.add('visible')

  const cancelDeleteMovieButton = deleteMovieModal.querySelector('.btn--passive')

  let confirmDeleteMovieButton = deleteMovieModal.querySelector('.btn--danger')
  confirmDeleteMovieButton.replaceWith(confirmDeleteMovieButton.cloneNode(true))
  confirmDeleteMovieButton = deleteMovieModal.querySelector('.btn--danger')

  cancelDeleteMovieButton.removeEventListener('click', closeDeleteMovieModal)
  cancelDeleteMovieButton.addEventListener('click', closeDeleteMovieModal)

  confirmDeleteMovieButton.addEventListener('click', deleteMovie.bind(null, movieId))
}

function closeDeleteMovieModal() {
  deleteMovieModal.classList.remove('visible')
  backdrop.classList.remove('visible')
}

startAddMovieButton.addEventListener('click', openMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
modalCancelButton.addEventListener('click', cancelAddMovieHandler)
modalAddMovieButton.addEventListener('click', addMovieHandler)
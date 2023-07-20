const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const userInputs = document.querySelectorAll("input");
const cancelButton = addMovieModal.querySelector(".btn--passive");
const addMovieBtn =
  addMovieModal.querySelector(".btn--passive").nextElementSibling;
const entryText = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");
const movieList = [];

const updateUI = () => {
  if (movieList.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movieList) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movieList.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  cancelMovieDeletion();
  updateUI()
};

const cancelMovieDeletion = () => {
  backDropVisibilty();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  backDropVisibilty();
  const cancelDeletionButtton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButtton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButtton.replaceWith(confirmDeletionButtton.cloneNode(true));
  confirmDeletionButtton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButtton.removeEventListener("click", cancelMovieDeletion);

  cancelDeletionButtton.addEventListener("click", cancelMovieDeletion);
  confirmDeletionButtton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  backDropVisibilty();
};

const backDropVisibilty = () => {
  backDrop.classList.toggle("visible");
};

const clearUserImput = () => {
  for (const userImput of userInputs) {
    userImput.value = "";
  }
};

const cancelAddMovieModal = () => {
  closeMovieModal();
  clearUserImput();
  backDropVisibilty();
};

const cofirmAddMovie = () => {
  const movieTitle = userInputs[0].value;
  const movieImage = userInputs[1].value;
  const movieRating = userInputs[2].value;
  if (
    movieTitle.trim() === "" ||
    movieImage.trim() === "" ||
    movieRating.trim() === "" ||
    movieRating < 1 ||
    movieRating > 5
  ) {
    alert("please enter vaild values (Rating between 1 and 5)");
    return;
  }
  const movie = {
    id: Math.random().toString(),
    title: movieTitle,
    image: movieImage,
    rating: movieRating,
  };
  movieList.push(movie);
  console.log(movieList);
  closeMovieModal();
  backDropVisibilty();
  clearUserImput();
  renderNewMovieElement(movie.id, movie.title, movie.image, movie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
  clearUserImput();
};

startAddMovieBtn.addEventListener("click", showMovieModal);
backDrop.addEventListener("click", backdropClickHandler);
cancelButton.addEventListener("click", cancelAddMovieModal);
addMovieBtn.addEventListener("click", cofirmAddMovie);

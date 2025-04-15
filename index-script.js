const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const movieCards = document.querySelector('.movie-cards');

// Width of one movie card + margin
const cardWidth = 200 + 15; // Adjust based on your CSS
const visibleCards = 7; // Number of visible cards
const totalCards = movieCards.children.length;
const maxIndex = totalCards - visibleCards;

let currentIndex = 0;

// Set the width of the movie-cards container to fit only visibleCards
movieCards.style.width = `${cardWidth * movieCards.children.length}px`;

// Handle left arrow click
arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        movieCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

// Handle right arrow click
arrowRight.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        movieCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

const movieModal = document.getElementById('movie-modal');
const closeMovieModal = document.getElementById('close-movie-modal');
const movieTitle = document.getElementById('movie-title');
const movieDescription = document.getElementById('movie-description');
const movieGenre = document.getElementById('movie-genre');

document.querySelectorAll('.movie-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title') || "Unknown Movie";
    const desc = card.getAttribute('data-description') || "No description.";
    const genre = card.getAttribute('data-genre') || "N/A";

    movieTitle.textContent = title;
    movieDescription.textContent = desc;
    movieGenre.textContent = genre;

    movieModal.classList.remove('hidden');
  });
});

closeMovieModal.addEventListener('click', () => {
  movieModal.classList.add('hidden');
});

document.addEventListener('keydown', e => {
  if (e.key === "Escape") {
    movieModal.classList.add('hidden');
  }
});
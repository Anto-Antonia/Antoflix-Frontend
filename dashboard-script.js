document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profileIcon");
    const profileDropdown = document.getElementById("profileDropdown");

    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents closing immediately when clicking
        profileDropdown.style.display = 
            profileDropdown.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicking anywhere else
    document.addEventListener("click", function () {
        profileDropdown.style.display = "none";
    });

    // Prevent closing when clicking inside the dropdown
    profileDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-bar i');
    const searchBar = document.querySelector('.search-bar');
    
    // Toggle visibility of search input when icon is clicked
    searchIcon.addEventListener('click', function() {
        searchBar.classList.toggle('open');
    });
});

// script for interactive movie cards
const movieModal = document.getElementById('movie-modal');
const closeMovieModal = document.getElementById('close-movie-modal');
const movieTitle = document.getElementById('movie-title');
const movieDescription = document.getElementById('movie-description');
const movieGenre = document.getElementById('movie-genre');
const movieTime = document.getElementById('movie-time');
const modalContent = movieModal.querySelector('.modal-content'); // Define modalContent

// Close modal when clicking outside modal content
movieModal.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) { // Check if the click is outside modal content
    movieModal.classList.add('hidden');
  }
});

// Add interactivity to movie cards
document.querySelectorAll('.movie-item').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title') || "Unknown Movie";
    const desc = card.getAttribute('data-description') || "No description.";
    const genre = card.getAttribute('data-genre') || "N/A";
    const time = card.getAttribute('data-time') || "No date time release.";
    const image = card.getAttribute('data-image') || "images/default.png";
    
    movieTitle.textContent = title;
    movieDescription.textContent = desc;
    movieGenre.textContent = genre;
    movieTime.textContent = time;

    const genreContainer = document.getElementById('movie-genre');
    genreContainer.innerHTML = ''; // clear old genre(s)

    genre.split(',').forEach(genres => {
      const tag = document.createElement('span');
      tag.classList.add('genre-tag');
      tag.textContent = genres.trim();
      genreContainer.appendChild(tag);
    });

    const movieImage = document.getElementById('movie-image');
    movieImage.setAttribute('src', image);

    movieModal.classList.remove('hidden');
  });
});

// Close the modal when the close button (X) is clicked
closeMovieModal.addEventListener('click', () => {
  movieModal.classList.add('hidden');
});
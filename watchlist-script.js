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

// shows/hides the main nav when scrolling on the page
let lastScrollY = window.scrollY;
const nav = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        nav.classList.add('hide');
    } else {
        // Scrolling up
        nav.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

// script for watchlists
// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.getElementById('watchlist-container');

//     fetch('/api/v1/watchlist/my')
//         .then(response => {
//             if (!response.ok) throw new Error('Failed to fetch watchlists');
//             return response.json();
//         })
//         .then(watchlists => {
//             if (watchlists.length === 0) {
//                 container.innerHTML = `
//                     <div class="create-watchlist-box">
//                         <i class="fa-solid fa-plus"></i>
//                         <p>Create your first Watchlist</p>
//                     </div>
//                 `;
//             } else {
//                 let html = '';
//                 watchlists.forEach(wl => {
//                     html += `
//                         <div class="watchlist-box">
//                             <h3>${wl.name}</h3>
//                             <p>${wl.movies.length} movies</p>
//                         </div>
//                     `;
//                 });

//                 // Plus icon for new watchlist
//                 html += `
//                     <div class="create-watchlist-box">
//                         <i class="fa-solid fa-plus"></i>
//                         <p>Create new Watchlist</p>
//                     </div>
//                 `;
//                 container.innerHTML = html;
//             }
//         })
//         .catch(err => {
//             container.innerHTML = `<p class="no-results">Could not load watchlists. Try again later.</p>`;
//             console.error(err);
//         });
// });

// script for adding watchlist
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById('watchlist-container');
    const modal = document.getElementById('watchlist-modal');
    const cancelBtn = document.getElementById('cancel-modal');
  
    addBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('watchlist-name').focus();
        }, 100);
    });
  
    cancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }
    });
  });
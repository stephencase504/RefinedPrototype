// Get the carousel element from the DOM
const carousel = document.querySelector('#carouselExampleIndicators');

// Function to display a slide given its index
function displaySlide(index) {
  // Trigger the Bootstrap carousel to go to the specified index
  $(carousel).carousel(index);
}

// Index to keep track of the current slide
let currentIndex = 0;

// Display the first slide
displaySlide(currentIndex);

// Event listener for the previous button click
document.querySelector('.carousel-control-prev').addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + carousel.querySelectorAll('.carousel-item').length) % carousel.querySelectorAll('.carousel-item').length;
  displaySlide(currentIndex);
});

// Event listener for the next button click
document.querySelector('.carousel-control-next').addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % carousel.querySelectorAll('.carousel-item').length;
  displaySlide(currentIndex);
});

// Keydown event for the whole document
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % carousel.querySelectorAll('.carousel-item').length;
    displaySlide(currentIndex);
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + carousel.querySelectorAll('.carousel-item').length) % carousel.querySelectorAll('.carousel-item').length;
    displaySlide(currentIndex);
  }
});

// Function to fade in the page
function fadeInPage() {
  document.querySelector('.page-container').style.opacity = 1;
}

// Function to fade out the page
function fadeOutPage() {
  document.querySelector('.page-container').style.opacity = 0;
}

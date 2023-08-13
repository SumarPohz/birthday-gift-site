const slider = document.getElementById("slider");
const slides = slider.getElementsByTagName("img");
let currentSlide = 0;
const slideInterval = 3000; // 3 seconds

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = i === slideIndex ? "block" : "none";
  }

  currentSlide = slideIndex;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
let autoSlideInterval = setInterval(nextSlide, slideInterval);

// Pause auto slide when the user interacts with the slider
slider.addEventListener("mouseover", () => {
  clearInterval(autoSlideInterval);
});

slider.addEventListener("mouseout", () => {
  autoSlideInterval = setInterval(nextSlide, slideInterval);
});

// Show the initial slide
showSlide(currentSlide);
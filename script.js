// JavaScript code for slideshow
let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow .slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.opacity = '0';
    });

    // Show the slide at the given index
    slides[index].style.opacity = '1';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Start the slideshow
setInterval(nextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)

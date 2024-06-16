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
setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

//Java script for emails

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate the form fields
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate submitting the form (you can replace this with actual submission logic)
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        form.reset(); // Reset the form after successful submission
    });
});
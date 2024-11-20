document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Here you can handle the form submission, e.g., send data to a server
        console.log('Form submitted:', { name, email, phone, message });

        // Clear the form after submission
        contactForm.reset();
        alert('Thank you for contacting us! We will get back to you soon.');
    });
}); 
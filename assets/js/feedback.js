/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Send the data (for now, let's log it to the console)
        console.log('Form submitted with data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

    
        alert('Thank you for your feedback!');
        form.reset(); // Reset the form
    });
});

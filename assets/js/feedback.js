/*jshint esversion: 6 */
/**
 * Sends data collected in contact form to email after the submit button is clicked calls the toggleThankYouMessage function
 * Code written with the help of the official EmailJS tuttorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // prevents default submit event
        emailjs.init("user_qpAwx9PIxzXHaH9jx");
        emailjs.sendForm('WoW-Quiz', 'template_mwo4qvp', this)
            .then(function () {
                // success sending email
            }, function (error) {
                // error message
                console.log('FAILED...', error);
            });
        toggleThankYouMessage();
    });
});

/**
 * Removes the contact forme and displays a thank you message on the contact page after form submision
 */
function toggleThankYouMessage() {
    let html = `
            <p class="text-center fs-2">Thank you for leaving a message.</p>
            <div class="image-container text-center col-5 col-sm-4 col-lg-3">
            </div>
            <div class="text-center my-2">
                <a href="index.html" class="return-btn btn btn-primary">Return to game</a>
            </div>`;
    document.getElementById('container').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit');

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

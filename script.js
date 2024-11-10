document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Clear previous error messages
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(error => error.remove());

        // Get values
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Initialize an empty array to collect error messages
        let errors = [];

        // Validate Email Format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // Validate Mobile Number (assuming it should be 10 digits)
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            errors.push("Please enter a valid 10-digit mobile number.");
        }

        // Validate Message
        if (message.trim() === '') {
            errors.push("Message cannot be empty.");
        }

        // Display Errors if any
        if (errors.length > 0) {
            errors.forEach(error => {
                const errorElement = document.createElement('div');
                errorElement.classList.add('error');
                errorElement.style.color = 'red'; // You can style this as you wish
                errorElement.innerText = error;
                form.prepend(errorElement);
            });
        } else {
            // If no errors, proceed with form submission (you can handle form submission here)
            alert("Form submitted successfully!");
            // Uncomment below line to actually submit the form (to the action URL)
            // form.submit();
        }
    });
});


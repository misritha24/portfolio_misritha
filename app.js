const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink !== i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    });
});



// Initialize EmailJS with your User ID
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

// Get the contact form
const form = document.getElementById("contact-form");

// Add an event listener to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page on submit

    // Get form data
    const formData = new FormData(form);

    // Send the form data to EmailJS
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            // On success, display a success message and reset the form
            alert("Message sent successfully!");
            form.reset(); // Reset form fields after submission
        }, function(error) {
            // On error, display an error message
            alert("Failed to send message. Please try again.");
        });
});


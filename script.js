// Interactive Feature for Call-to-Action Button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Discover more about this amazing product!');
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        event.preventDefault();
    }
});

// Back-to-Top Button
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

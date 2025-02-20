/* Smooth Scrolling for Navigation */
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});

/* Basic Contact Form Handling */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can integrate with a backend service or Formspree.
    // For now, we simulate a successful submission.
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

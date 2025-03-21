// JavaScript for Scroll Reveal Effect
window.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
  
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      origin: 'bottom',
    });
  
    sections.forEach((section) => {
      sr.reveal(section, {
        afterReveal: () => section.classList.add('visible'),
      });
    });
  });
  
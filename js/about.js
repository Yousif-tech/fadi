const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerIcon.classList.toggle('active');
  closeIcon.classList.toggle('active');
});

// Optional: close menu & reset icons when clicking nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburgerIcon.classList.add('active');
    closeIcon.classList.remove('active');
  });
});

    const options = { threshold: 0.3 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);
document.querySelectorAll('.section h2, .section .content img, .section .content .text')
  .forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    observer.observe(el);
  });
 
// Select all internal nav links that navigate inside your site
const navLinks = document.querySelectorAll('nav a[href^="index.html"], nav a[href^="about.html"], nav a[href^="contact.html"], nav a[href^="faq.html"], nav a[href^="portfolio-overview.html"]');

// When any nav link is clicked, set the skip flag
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sessionStorage.setItem('skipPreloader', 'true');
  });
});

if (sessionStorage.getItem('skipPreloader') === 'true') {
  // Skip preloader after internal nav click
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    document.getElementById('main-content').style.display = 'block';
    sessionStorage.removeItem('skipPreloader'); // reset for next load
  });
} else {
  // Show preloader on full reload (F5)
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('loaded');
      document.getElementById('main-content').style.display = 'block';
    }, 1500);
  });
}

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.transparent-navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
  const navbar = document.querySelector('.transparent-navbar');
  const hero = document.querySelector('.hero-header');

  function toggleNavbar() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  }

  window.addEventListener('scroll', toggleNavbar);
  window.addEventListener('load', toggleNavbar);


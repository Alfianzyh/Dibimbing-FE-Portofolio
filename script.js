const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', function () {
  nav.classList.toggle('nav-open');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});
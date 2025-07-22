const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.querySelector('.main-nav');

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open'); 
  hamburgerBtn.classList.toggle('active'); 

  const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  hamburgerBtn.setAttribute('aria-expanded', !expanded);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', false);
  });
});

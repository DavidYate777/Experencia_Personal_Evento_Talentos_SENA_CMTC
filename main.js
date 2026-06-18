// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── HERO ENTRANCE ANIMATION ───
window.addEventListener('load', () => {
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) heroImg.classList.add('loaded');

  const lines    = document.querySelectorAll('.title-line');
  const divider  = document.querySelector('.hero-divider');
  const body     = document.querySelector('.hero-body');
  const cta      = document.querySelector('.hero-cta');

  setTimeout(() => lines.forEach(l => l.classList.add('visible')), 200);
  setTimeout(() => divider?.classList.add('visible'), 600);
  setTimeout(() => body?.classList.add('visible'), 700);
  setTimeout(() => cta?.classList.add('visible'), 900);
});

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll(
  '.arte-card, .competidor-card, .arte-quote, .musica-text, .musica-video-wrap'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ─── MOBILE NAV TOGGLE ───
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// close on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── ACTIVE NAV HIGHLIGHT ───
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--gold)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

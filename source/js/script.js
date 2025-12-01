// Trigger hero animations on page load
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const logo = document.querySelector('.logo');

  setTimeout(() => {
    heroContent.classList.add('animate');
    scrollIndicator.classList.add('show');
    logo.classList.add('glow');
  }, 100);
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
  '.section-title, .intro-text, .handwritten, .card, .value-item, ' +
  '.mesh-gradient, .cta-title, .cta-text, .btn, .find-us-content'
);

animatedElements.forEach(el => observer.observe(el));

// Mouse tracking for card hover effects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});

// Parallax effect for orbs on scroll
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const orbs = document.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// Add random slight delay variations to make animations feel more organic
document.querySelectorAll('.card').forEach((card, index) => {
  const randomDelay = Math.random() * 0.1;
  card.style.transitionDelay = `${0.1 * (index + 1) + randomDelay}s`;
});

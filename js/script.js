/* =============================================
   BEUXJ.DEV — JavaScript
   ============================================= */

// ── Scrolled nav gold line ─────────────────────
const topnav = document.querySelector('.topnav');
window.addEventListener('scroll', () => {
  topnav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Active nav on scroll ──────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActive() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 80;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', setActive, { passive: true });
setActive();

// ── Scroll reveal ─────────────────────────────
const reveals = document.querySelectorAll(
  '.project-card, .skill-card, .pipeline-step, .mission-item, .section-title, .diag-card, .contact-card, .contact-elsewhere'
);
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
reveals.forEach(el => observer.observe(el));

// ── Stagger child reveals ─────────────────────
document.querySelectorAll('.projects-grid, .skill-cards-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ── Skill bars animate on enter ──────────────
const barObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });
      barObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.3 }
);
document.querySelectorAll('.skill-bars').forEach(el => barObserver.observe(el));

// ── Cursor trail (subtle) ─────────────────────
let cx = 0, cy = 0;
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed; pointer-events: none; z-index: 9999;
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(200,184,130,0.6);
  transform: translate(-50%,-50%);
  transition: opacity 0.3s;
  mix-blend-mode: screen;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top  = cy + 'px';
});

// ── Smooth scroll ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Typing effect on hero tag ─────────────────
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const text = heroTag.textContent.trim();
  heroTag.textContent = '';
  heroTag.style.opacity = '1';
  const dot = document.createElement('span');
  dot.className = 'tag-dot';
  heroTag.appendChild(dot);
  const span = document.createElement('span');
  heroTag.appendChild(span);
  let i = 0;
  const type = () => {
    if (i < text.length) {
      span.textContent += text[i++];
      setTimeout(type, 35);
    }
  };
  setTimeout(type, 600);
}

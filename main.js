// ── MOBILE MENU ──
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// ── LANGUAGE TOGGLE ──
const langBtn = document.querySelector('.lang-btn');
let currentLang = localStorage.getItem('nth_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  document.body.classList.toggle('vi', lang === 'vi');
  if (langBtn) langBtn.textContent = lang === 'vi' ? 'EN' : 'VI';
  localStorage.setItem('nth_lang', lang);
  // Swap Odoo form src if present
  const iframe = document.querySelector('.odoo-form-wrap iframe');
  if (iframe) {
    const base = iframe.dataset.src || iframe.src;
    const enSrc = iframe.dataset.enSrc;
    const viSrc = iframe.dataset.viSrc;
    if (lang === 'vi' && viSrc) iframe.src = viSrc;
    else if (enSrc) iframe.src = enSrc;
  }
}

applyLang(currentLang);

if (langBtn) {
  langBtn.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'vi' : 'en');
  });
}

// ── ACTIVE NAV LINK ──
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── SMOOTH SCROLL for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

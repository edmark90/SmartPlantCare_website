

function nudgeBars(){
  document.querySelectorAll('.hero .ps-bar-fill, .app-exp .phone:not(.side) .ps-bar-fill').forEach((bar) => {
    const current = parseFloat(bar.style.width) || 50;
    const next = Math.min(96, Math.max(8, current + (Math.random() * 6 - 3)));
    bar.style.width = next.toFixed(0) + '%';
  });
}

if (!REDUCE_MOTION) {
  setInterval(nudgeBars, 2600);
}

function initFAQ(){
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-q');
    question.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

initFAQ();

function initMobileMenu(){
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  function closeMenu(){
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

initMobileMenu();

function initScrollSpy(){
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

initScrollSpy();

function initBackToTop(){
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? 'auto' : 'smooth' });
  });
}

initBackToTop();

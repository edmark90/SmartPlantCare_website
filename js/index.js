// Motion preference is shared by global.js.
// Readings in the app illustration stay fixed so labels and bars agree.
document.querySelectorAll('.faq-item').forEach((item, index) => {
  const question = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  answer.id = `faq-answer-${index}`;
  question.type = 'button';
  question.setAttribute('aria-controls', answer.id);
  question.setAttribute('aria-expanded', 'false');
  question.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    question.setAttribute('aria-expanded', String(open));
  });
});
const burger = document.getElementById('navBurger');
const menu = document.getElementById('mobileMenu');
if (burger && menu) {
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    menu.inert = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  setMenu(false);
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      burger.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('header')) setMenu(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });
}
if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  const update = () => {
    const visible = window.scrollY > 600;
    backToTop.classList.toggle('visible', visible);
    backToTop.tabIndex = visible ? 0 : -1;
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? 'auto' : 'smooth' }));
}
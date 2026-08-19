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
/* ==========================================================================
   INDEX.JS — Page-specific scripts for index.html.
   Depends on global.js (jitter, REDUCE_MOTION must already be loaded).
   ========================================================================== */

/* ---------- HERO PHONE — LIVE BAR NUDGE ----------
   Gently nudges the two progress bars in the hero phone dashboard so the
   screen feels alive, without needing numbered vital IDs in the markup.
   ---------------------------------------------------------------------- */

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

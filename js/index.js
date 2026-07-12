/* ==========================================================================
   INDEX.JS — Page-specific scripts for index.html.
   Depends on global.js (jitter, REDUCE_MOTION must already be loaded).
   ========================================================================== */


/* ---------- HERO VITALS TICKER ----------
   Updates the four live sensor numbers in the hero strip every 2.6 seconds.
   Reads DOM once on init so the selectors don't repeat on every tick.
   ---------------------------------------------------------------------- */

const vitalEls = {
  moisture: document.getElementById('v-moisture'),
  light:    document.getElementById('v-light'),
  temp:     document.getElementById('v-temp'),
  health:   document.getElementById('v-health'),
};

function tickVitals() {
  if (vitalEls.moisture) vitalEls.moisture.innerHTML = jitter(42,  2,  0) + '<span class="unit">%</span>';
  if (vitalEls.light)    vitalEls.light.innerHTML    = jitter(680, 15, 0) + '<span class="unit">lux</span>';
  if (vitalEls.temp)     vitalEls.temp.innerHTML     = jitter(24.3, 0.4, 1) + '<span class="unit">°C</span>';
  if (vitalEls.health)   vitalEls.health.innerHTML   = jitter(98,  1,  0) + '<span class="unit">%</span>';
}

if (!REDUCE_MOTION) {
  setInterval(tickVitals, 2600);
}

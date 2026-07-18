
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

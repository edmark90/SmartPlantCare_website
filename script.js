// Gentle live-feeling vitals ticking
  function jitter(base, range, decimals){
    const v = base + (Math.random() * range * 2 - range);
    return v.toFixed(decimals);
  }
  function tick(){
    const moisture = document.getElementById('v-moisture');
    const light = document.getElementById('v-light');
    const temp = document.getElementById('v-temp');
    const health = document.getElementById('v-health');
    if(moisture) moisture.innerHTML = jitter(42, 2, 0) + '<span class="unit">%</span>';
    if(light) light.innerHTML = jitter(680, 15, 0) + '<span class="unit">lux</span>';
    if(temp) temp.innerHTML = jitter(24.3, 0.4, 1) + '<span class="unit">°C</span>';
    if(health) health.innerHTML = jitter(98, 1, 0) + '<span class="unit">%</span>';
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion){
    setInterval(tick, 2600);
  }

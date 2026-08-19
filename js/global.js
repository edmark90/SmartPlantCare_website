
/**
 * @param {number} base      - Center value (e.g. 42)
 * @param {number} range     - Max offset up or down (e.g. 2)
 * @param {number} decimals  - Decimal places to fix to (e.g. 1)
 * @returns {string}
 */
function jitter(base, range, decimals) {
  const v = base + (Math.random() * range * 2 - range);
  return v.toFixed(decimals);
}

/** True when the OS has asked to reduce animations. */
const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

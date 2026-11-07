module.exports = {
  content: { relative: true, files: ['./index.html', './js/*.js'] },
  theme: {
    extend: {
      colors: { canvas: '#f8f8f0', ink: '#183d2d', muted: '#526858', primary: '#245c3d', line: '#142d2014' },
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Fraunces', 'serif'], mono: ['JetBrains Mono', 'monospace'] },
      animation: { dot: 'pulse-dot 2.2s infinite', vine: 'vine-travel 6.5s linear infinite', leaf: 'leaf-sway 3.6s ease-in-out infinite', glow: 'glow-pulse 3.2s ease-in-out infinite' },
      keyframes: {
        'pulse-dot': { '0%,100%': { boxShadow: '0 0 0 0 #1f5c3a73' }, '70%': { boxShadow: '0 0 0 8px #1f5c3a00' } },
        'vine-travel': { from: { strokeDashoffset: '0' }, to: { strokeDashoffset: '-926' } },
        'leaf-sway': { '0%,100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } },
        'glow-pulse': { '0%,100%': { opacity: '.6', transform: 'translate(-50%,-50%) scale(.96)' }, '50%': { opacity: '1', transform: 'translate(-50%,-50%) scale(1.04)' } }
      }
    }
  },
  plugins: []
};
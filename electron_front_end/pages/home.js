// pages/home.js start
export default function Home() {
  return `
    <div class="wrap card">
      <div class="hero">
        <h1 class="brand"><span class="gild">MYTH MAKER</span></h1>

        <div class="sigil" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="96" height="96" role="img" aria-label="MW Monogram">
            <defs>
              <linearGradient id="mwGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#fff7c5"/>
                <stop offset="60%" stop-color="#f0d98a"/>
                <stop offset="100%" stop-color="#b28a3a"/>
              </linearGradient>
              <filter id="mwGlow">
                <feGaussianBlur stdDeviation="1.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <!-- outer dotted ring -->
            <circle class="ring" cx="60" cy="60" r="46"
                    fill="none" stroke="rgba(245,215,110,.35)"
                    stroke-width="2" stroke-dasharray="6 8"/>

            <!-- MW monogram -->
            <g filter="url(#mwGlow)" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <!-- M -->
              <path d="M34 80 L46 40 L60 60 L74 40 L86 80"
                    stroke="url(#mwGrad)" stroke-width="3"/>
              <!-- W -->
              <path d="M34 44 L48 84 L60 60 L72 84 L86 44"
                    stroke="rgba(139,124,246,.9)" stroke-width="2.6"/>
            </g>
          </svg>
        </div>

        <p class="subtitle">Forge characters, weave tales, and let fate decide.</p>
        <div class="home-cta">
          <a class="button cta-large" href="#/journey">Start Your Journey</a>
        </div>
      </div>
    </div>
  `;
}
// pages/home.js end

// pages/journey.js start
export default function Journey() {
  return `
    <section class="journey-container">
      <div class="journey-grid">
        <div class="journey-form medieval-form">
          <div class="form-header">
            <h2>Create Your Being</h2>
            <p class="form-subtitle">Forge your destiny in the realm of legends</p>
          </div>

          <div class="form-section">
            <div class="row">
              <label for="playerName" class="label-with-icon">
                <svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Name
              </label>
              <input id="playerName" class="input enhanced-input" type="text" placeholder="Enter your champion's name" autocomplete="off">
            </div>

            <div class="row">
              <label for="species" class="label-with-icon">
                <svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Species
              </label>
              <select id="species" class="input enhanced-select">
                <option value="human" selected>Human - Versatile and adaptable</option>
                <option value="elf">Elf - Graceful and wise</option>
                <option value="dwarf">Dwarf - Strong and resilient</option>
                <option value="goblin">Goblin - Cunning and agile</option>
              </select>
            </div>

            <div class="row stats-row">
              <label class="label-with-icon">
                <svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/>
                </svg>
                Power Level
              </label>
              <div class="stat-control">
                <input type="range" id="powerLevel" min="1" max="100" value="50" class="power-slider" aria-label="Power level">
                <span id="powerValue" class="stat-value">50</span>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3 class="section-title">Physical Attributes</h3>
            <div class="parts-grid">
              <div class="parts-category">
                <h4 class="category-title">Limbs & Movement</h4>
                <div class="parts-list">
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="left_arm" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Left Arm</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="right_arm" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Right Arm</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="left_leg" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Left Leg</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="right_leg" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Right Leg</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox special-part">
                    <input type="checkbox" data-part="tail">
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Tail</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox special-part">
                    <input type="checkbox" data-part="wings">
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Wings</span>
                  </label>
                </div>
              </div>

              <div class="parts-category">
                <h4 class="category-title">Sensory Features</h4>
                <div class="parts-list">
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="left_eye" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Left Eye</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="right_eye" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Right Eye</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="mouth" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Mouth</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="left_ear" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Left Ear</span>
                  </label>
                  <label class="part-checkbox enhanced-checkbox">
                    <input type="checkbox" data-part="right_ear" checked>
                    <span class="checkbox-visual"></span>
                    <span class="checkbox-label">Right Ear</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="actions">
            <a class="button secondary-button" href="#/">
              <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
              Back to Home
            </a>
            <button id="journeySubmit" class="button primary-button submit-btn" type="button">
              <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Begin Journey
            </button>
          </div>
        </div>

        <div class="avatar-section">
          <div class="avatar-board">
            <div class="avatar-header">
              <h3 class="avatar-title">Your Champion</h3>
              <div class="avatar-stats">
                <div class="stat-item">
                  <span class="stat-label">Parts</span>
                  <span id="partCount" class="stat-number" aria-live="polite">9/11</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power</span>
                  <span id="powerDisplay" class="stat-number" aria-live="polite">50</span>
                </div>
              </div>
            </div>

            <div class="avatar-container">
              <svg class="avatar-svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" aria-label="Character Creator">
                <defs>
                  <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="rgba(255,220,177,0.9)"/>
                    <stop offset="100%" stop-color="rgba(255,200,160,0.8)"/>
                  </linearGradient>
                  <linearGradient id="cloth" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="rgba(139,124,246,0.6)"/>
                    <stop offset="100%" stop-color="rgba(23,198,179,0.5)"/>
                  </linearGradient>
                  <linearGradient id="tailGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="rgba(139,124,246,0.95)"/>
                    <stop offset="100%" stop-color="rgba(23,198,179,0.75)"/>
                  </linearGradient>
                  <radialGradient id="tailTipGrad" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stop-color="rgba(245,215,110,0.95)"/>
                    <stop offset="100%" stop-color="rgba(139,124,246,0.95)"/>
                  </radialGradient>
                </defs>

                <g id="part-wings" data-part="wings" class="part special-part-svg" tabindex="0">
                  <rect x="60" y="160" width="120" height="100" fill="transparent" class="click-area"/>
                  <rect x="220" y="160" width="120" height="100" fill="transparent" class="click-area"/>
                  <path d="M200 230 L100 170 L180 210 Z" class="special-part-svg">
                    <animateTransform attributeName="transform" type="rotate"
                      values="0 200 230;-7 200 230;0 200 230;7 200 230;0 200 230" dur="2.6s" repeatCount="indefinite"/>
                  </path>
                  <path d="M200 230 L300 170 L220 210 Z" class="special-part-svg">
                    <animateTransform attributeName="transform" type="rotate"
                      values="0 200 230;7 200 230;0 200 230;-7 200 230;0 200 230" dur="2.6s" repeatCount="indefinite"/>
                  </path>
                </g>

                <rect x="170" y="200" width="60" height="120" rx="12" fill="url(#cloth)" stroke="rgba(139,124,246,0.4)" stroke-width="2"/>
                <circle cx="200" cy="170" r="40" fill="url(#skin)" stroke="rgba(255,220,177,0.6)" stroke-width="2"/>

                <g id="part-left_ear" data-part="left_ear" class="part face-part" tabindex="0">
                  <rect x="145" y="160" width="25" height="25" fill="transparent" class="click-area"/>
                  <circle cx="165" cy="170" r="8" class="face-part"/>
                </g>
                <g id="part-right_ear" data-part="right_ear" class="part face-part" tabindex="0">
                  <rect x="230" y="160" width="25" height="25" fill="transparent" class="click-area"/>
                  <circle cx="235" cy="170" r="8" class="face-part"/>
                </g>
                <g id="part-left_eye" data-part="left_eye" class="part face-part" tabindex="0">
                  <rect x="175" y="155" width="20" height="20" fill="transparent" class="click-area"/>
                  <circle cx="185" cy="165" r="6" fill="rgba(50,50,50,0.9)"/>
                </g>
                <g id="part-right_eye" data-part="right_eye" class="part face-part" tabindex="0">
                  <rect x="205" y="155" width="20" height="20" fill="transparent" class="click-area"/>
                  <circle cx="215" cy="165" r="6" fill="rgba(50,50,50,0.9)"/>
                </g>
                <g id="part-mouth" data-part="mouth" class="part face-part" tabindex="0">
                  <rect x="185" y="175" width="30" height="15" fill="transparent" class="click-area"/>
                  <rect x="190" y="180" width="20" height="6" rx="3" fill="rgba(200,100,100,0.8)"/>
                </g>

                <g id="part-left_arm" data-part="left_arm" class="part limb-part" tabindex="0">
                  <rect x="145" y="220" width="30" height="125" fill="transparent" class="click-area"/>
                  <rect x="150" y="220" width="20" height="118" rx="10" class="limb-part"/>
                  <ellipse cx="160" cy="345" rx="14.5" ry="6" fill="rgba(101,67,33,0.9)"/>
                </g>
                <g id="part-right_arm" data-part="right_arm" class="part limb-part" tabindex="0">
                  <rect x="225" y="220" width="30" height="125" fill="transparent" class="click-area"/>
                  <rect x="230" y="220" width="20" height="118" rx="10" class="limb-part"/>
                  <ellipse cx="240" cy="345" rx="14.5" ry="6" fill="rgba(101,67,33,0.9)"/>
                </g>
                
                <g id="part-left_leg" data-part="left_leg" class="part limb-part" tabindex="0">
                  <rect x="170" y="320" width="30" height="140" fill="transparent" class="click-area"/>
                  <rect x="175" y="330" width="20" height="120" rx="10" class="limb-part"/>
                  <ellipse cx="185" cy="460" rx="15" ry="8" fill="rgba(101,67,33,0.9)"/>
                </g>
                <g id="part-right_leg" data-part="right_leg" class="part limb-part" tabindex="0">
                  <rect x="200" y="320" width="30" height="140" fill="transparent" class="click-area"/>
                  <rect x="205" y="330" width="20" height="120" rx="10" class="limb-part"/>
                  <ellipse cx="215" cy="460" rx="15" ry="8" fill="rgba(101,67,33,0.9)"/>
                </g>

                <g id="part-tail" data-part="tail" class="part" tabindex="0">
                  <rect x="230" y="360" width="110" height="70" fill="transparent" class="click-area"/>
                  <g class="tail-swing">
                    <path class="tail-stroke" d="M235 408 C 272 408, 305 396, 332 384"/>
                    <circle class="tail-tip" cx="332" cy="384" r="7"/>
                    <animateTransform attributeName="transform" type="rotate"
                      values="-18 235 408;8 235 408;-18 235 408" dur="2.6s" repeatCount="indefinite"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div class="holy-particles" id="holyParticles"></div>
        </div>
      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  (function(){
    function initHoly(){
      const root = document.getElementById('holyParticles');
      if (!root || root.dataset.init) return false;
      root.dataset.init = '1';
      const COUNT = 28;
      for (let i = 0; i < COUNT; i++) {
        const p = document.createElement('span');
        p.className = 'holy-mote';
        p.style.setProperty('--x', (4 + Math.random() * 92) + '%');
        p.style.setProperty('--size', (1 + Math.random() * 2) + 'px');
        p.style.setProperty('--delay', (-Math.random() * 25) + 's');
        p.style.setProperty('--dur', (42 + Math.random() * 46) + 's');
        p.style.setProperty('--dx1', ((Math.random() * 2 - 1) * 18) + 'px');
        p.style.setProperty('--dx2', ((Math.random() * 2 - 1) * 26) + 'px');
        p.style.setProperty('--dx3', ((Math.random() * 2 - 1) * 18) + 'px');
        root.appendChild(p);
      }
      return true;
    }
    if (!initHoly()){
      const mo = new MutationObserver(() => { if (initHoly()) mo.disconnect(); });
      mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
    }
  })();
}
// pages/journey.js end

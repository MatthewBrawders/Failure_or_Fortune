// app.js start
import Home, { mountHomeEffects } from './pages/home.js';
import Settings from './pages/settings.js';
import Journey, { mountJourneyEffects } from './pages/journey.js';

const routes = { '/': Home, '/settings': Settings, '/journey': Journey };
let lastNonSettings = '/';

function currentPath() {
  const hash = window.location.hash || '#/';
  const path = hash.startsWith('#') ? hash.slice(1) : hash;
  return routes[path] ? path : '/';
}

function playClick() {
  const el = document.getElementById('uiClick');
  if (!el) return;
  const vol = (getSavedVolume() ?? 0.5) * 0.9;
  try {
    const snd = el.cloneNode(true);
    snd.volume = Math.max(0, Math.min(1, vol));
    snd.play().catch(() => {});
    snd.addEventListener('ended', () => snd.remove());
  } catch {}
}

function setupUiClickSfx() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('button, .button, [role="button"], .win-btn, .settings-btn, a[href^="#/"]');
    if (!el || el.hasAttribute('data-mute-click')) return;
    playClick();
  }, true);
}

function getSavedVolume() {
  const raw = localStorage.getItem('bgmVolume');
  if (raw === null) return null;
  const v = Number(raw);
  return Number.isFinite(v) && v >= 0 && v <= 1 ? v : null;
}
function setSavedVolume(v) { localStorage.setItem('bgmVolume', String(v)); }

function startBgm() {
  const bgm = document.getElementById('bgm');
  if (!bgm) return;
  const vol = getSavedVolume() ?? 0.5;
  bgm.volume = vol;
  bgm.play().catch(() => {
    const kickoff = () => { bgm.play().catch(() => {}); document.removeEventListener('pointerdown', kickoff); };
    document.addEventListener('pointerdown', kickoff, { once: true });
  });
}

function setupDelegatedRouting() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#/"], button[data-route]');
    if (!link) return;
    e.preventDefault();
    const target = (link.getAttribute('href')?.slice(1)) || link.getAttribute('data-route');
    if (target && routes[target]) {
      if ('#' + target !== window.location.hash) window.location.hash = '#' + target;
      else render();
    }
  });
}

function bindSettingsControls() {
  if (currentPath() !== '/settings') return;
  const bgm = document.getElementById('bgm');
  const slider = document.getElementById('volumeSlider');
  const value = document.getElementById('volumeValue');
  if (!bgm || !slider || !value) return;

  const initialVol = getSavedVolume() ?? 0.5;
  const pct = Math.round(initialVol * 100);
  slider.value = String(pct);
  value.textContent = `${pct}%`;

  slider.addEventListener('input', () => {
    const v = Math.min(100, Math.max(0, Number(slider.value)));
    const vol = v / 100;
    bgm.volume = vol;
    setSavedVolume(vol);
    value.textContent = `${v}%`;
  });
}

function bindJourneyControls() {
  if (currentPath() !== '/journey') return;

  const root = document.querySelector('.journey-grid') || document;
  const boxes = root.querySelectorAll('input[type="checkbox"][data-part]');
  const partCountDisplay = document.getElementById('partCount');
  const powerSlider = document.getElementById('powerLevel');
  const powerValue = document.getElementById('powerValue');
  const powerDisplay = document.getElementById('powerDisplay');
  const submit = document.getElementById('journeySubmit');

  const syncSvg = (part, present) => {
    const node = document.getElementById(`part-${part}`);
    if (!node) return;
    node.classList.toggle('missing', !present);
    node.style.opacity = present ? '1' : '0.3';
  };

  const updatePartCount = () => {
    const checked = root.querySelectorAll('input[data-part]:checked').length;
    const total = boxes.length;
    if (partCountDisplay) partCountDisplay.textContent = `${checked}/${total}`;
    if (submit) submit.classList.toggle('ready', checked >= 5);
  };

  boxes.forEach(cb => {
    syncSvg(cb.dataset.part, cb.checked);
    cb.addEventListener('change', () => { syncSvg(cb.dataset.part, cb.checked); updatePartCount(); });
  });

  root.querySelectorAll('.part[data-part]').forEach(el => {
    el.addEventListener('click', () => {
      const part = el.getAttribute('data-part');
      const cb = root.querySelector(`input[data-part="${part}"]`);
      if (cb) { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change', { bubbles: true })); }
    });
  });

  const updatePower = () => {
    if (!powerSlider) return;
    const v = Math.min(100, Math.max(0, Number(powerSlider.value || 0)));
    if (powerValue) powerValue.textContent = String(v);
    if (powerDisplay) powerDisplay.textContent = String(v);
    const hue = (v / 100) * 120;
    powerSlider.style.background =
      `linear-gradient(90deg, hsl(${hue}, 70%, 60%), hsl(${hue + 30}, 70%, 60%))`;
  };

  if (powerSlider) {
    updatePower();
    powerSlider.addEventListener('input', updatePower);
  }

  updatePartCount();

  submit?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const name = document.getElementById('playerName')?.value?.trim() || '';
    const species = document.getElementById('species')?.value || 'human';

    const partsMap = {};
    boxes.forEach(cb => { partsMap[cb.dataset.part] = cb.checked; });
    const partsSelected = Object.values(partsMap).filter(Boolean).length;

    if (!name) { alert('Please enter a name for your champion!'); return; }
    if (partsSelected < 5) {
      alert('Your champion needs at least 5 body parts to begin the journey!');
      return;
    }

    const payload = { name, species, power: Number(powerSlider?.value || 0), parts: partsMap };
    localStorage.setItem('journeyData', JSON.stringify(payload));
    submit.blur();
    alert(`Character "${name}" created successfully! Species: ${species}, Power: ${payload.power}, Parts: ${partsSelected}`);
  });
}

function render() {
  const path = currentPath();
  const Component = routes[path];
  if (path !== '/settings') lastNonSettings = path;

  const app = document.getElementById('app');
  const html = Component();

  if (path === '/settings') app.innerHTML = `<div class="card">${html}</div>`;
  else app.innerHTML = html;
  if (path === '/') {
    try { mountHomeEffects(); } catch {}
  }
  if (path === '/journey') {
    try { mountJourneyEffects(); } catch {}
  }
  const isJourney = path === '/journey';
  document.documentElement.classList.toggle('no-scroll', isJourney);
  document.body.classList.toggle('no-scroll', isJourney);
  document.body.classList.toggle('route-journey', isJourney);

  const isHome = path === '/';
  document.body.classList.toggle('route-home', isHome);

  const btn = document.getElementById('settingsToggle');
  if (btn) {
    const inSettings = path === '/settings';
    btn.classList.toggle('is-active', inSettings);
    btn.textContent = inSettings ? 'Close' : 'Settings';
  }

  bindSettingsControls();
  bindJourneyControls();
}

function setupTopbar() {
  const btn = document.getElementById('settingsToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      if (currentPath() === '/settings') window.location.hash = `#${lastNonSettings}`;
      else window.location.hash = '#/settings';
    });
  }
  const minBtn = document.getElementById('minBtn');
  const closeBtn = document.getElementById('closeBtn');
  if (minBtn) minBtn.addEventListener('click', () => window.api?.window?.minimize());
  if (closeBtn) closeBtn.addEventListener('click', () => window.api?.window?.close());
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  setupTopbar();
  setupDelegatedRouting();
  startBgm();
  setupUiClickSfx();
  render();
});
// app.js end

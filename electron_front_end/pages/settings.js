// pages/settings.js start
export default function Settings() {
  return `
    <div style="min-width:260px">
      <h2 style="margin:0 0 10px">Settings</h2>
      <div class="settings-section">
        <label for="volumeSlider">Music Volume</label>
        <div class="volume-row">
          <input id="volumeSlider" type="range" min="0" max="100" value="100" />
          <span id="volumeValue">100%</span>
        </div>
      </div>
    </div>
  `;
}
// pages/settings.js end

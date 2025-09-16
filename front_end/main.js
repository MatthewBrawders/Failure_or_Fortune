// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  let iconFile = './assets/FoF.png';
  if (process.platform === 'win32') iconFile = './assets/FoF.ico';
  else if (process.platform === 'darwin') iconFile = './assets/FoF.icns';

  mainWindow = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, iconFile),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

ipcMain.handle('win:minimize', () => { if (mainWindow) mainWindow.minimize(); });
ipcMain.handle('win:close', () => { if (mainWindow) mainWindow.close(); });

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
// End of main.js
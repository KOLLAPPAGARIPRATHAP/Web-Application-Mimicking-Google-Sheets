// terminal should be in activity
// create main.js
// npm init -y
// npm install electron
// in package.json file => add line => 
const electron = require('electron');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,  // Disabling nodeIntegration for security
      contextIsolation: true,  // Isolates JavaScript execution context for security
      preload: path.join(__dirname, 'preload.js')  // Use preload script for secure exposure of Node.js APIs
    },
  });

  win.loadFile('./index.ejs').then(() => {
    win.removeMenu();
    win.maximize();
  });

  win.on('resize', () => {
    let [width, height] = win.getSize();
    console.log('Window resized to:', width, height);
  });
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Recreate a window if none exist (macOS behavior)
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle uncaught exceptions
app.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  app.quit();
});

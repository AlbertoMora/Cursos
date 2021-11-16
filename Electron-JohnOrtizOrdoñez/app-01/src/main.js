const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nativeWindowOpen: false,
        },
    });

    mainWindow.loadFile('src/views/index.html');
};

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform === 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

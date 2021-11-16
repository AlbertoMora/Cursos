const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

if (process.env.NODE_ENV !== 'production')
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
    });

let mainWindow;

const createMainWindow = () => {
    width: 800,
        (mainWindow = new BrowserWindow({
            height: 600,
            webPreferences: {
                nativeWindowOpen: false,
                nodeIntegration: false,
                enableRemoteModule: false,
                contextIsolation: true,
                nodeIntegrationInWorker: false,
                nodeIntegrationInSubFrames: false,
                preload: path.join(__dirname, 'preload.js'),
            },
        }));

    mainWindow.loadFile('src/views/index.html');
};

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

ipcMain.on('linkManager', (e, link) => {
    shell.openExternal(link);
});

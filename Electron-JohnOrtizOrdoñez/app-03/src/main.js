const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;
let aboutWindow;

const appMenu = [
    {
        label: 'App',
        submenu: [
            {
                label: 'Acerca de',
                click: () => {
                    openAboutWindow();
                },
            },
        ],
    },
];

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nativeWindowOpen: false,
            nodeIntegration: false,
            enableRemoteModule: false,
            contextIsolation: true,
            nodeIntegrationInWorker: false,
            nodeIntegrationInSubFrames: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));
    const menu = Menu.buildFromTemplate(appMenu);
    mainWindow.setMenu(menu);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

const openAboutWindow = () => {
    aboutWindow = new BrowserWindow({
        height: 400,
        width: 400,
    });

    aboutWindow.loadFile(path.join(__dirname, 'views/about.html'));
};

app.whenReady().then(createMainWindow);

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('active', () => {
    if (BrowserWindow.getAllWindows().length !== 0) {
        createMainWindow();
    }
});

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    openExternalLinks: (channel, data) => {
        let validChannels = ['linkManager'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
});

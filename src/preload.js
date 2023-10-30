const { contextBridge, remote } = require('electron');

contextBridge.exposeInMainWorld(
  'electron',
  {
    remote: remote
  }
);
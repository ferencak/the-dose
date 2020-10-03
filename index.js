const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});
require("@babel/register");



function createWindow () {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile(__dirname + '/public/index.html')
  win.webContents.openDevTools()
}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
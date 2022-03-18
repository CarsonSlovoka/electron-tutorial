const electron = require("electron") // 載入整個electron
const app = electron.app // const { app } = require('electron')

// https://www.electronjs.org/docs/latest/api/browser-window // 👈 可以查看官方文檔
// https://github.com/electron/electron/blob/ac6ed62ab96a0a0717ce3259f9c02da4dff7285f/docs/api/browser-window.md?plain=1#L7-L17
const BrowserWindow = electron.BrowserWindow

let mainWindow // 一個準備接受browserWindow的對象

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 300
  })

  // 加載主文件
  mainWindow.loadURL('file://' + __dirname + '/index.html') // __dirname為node.js提供的變數
  // mainWindow.loadURL('./index.html') // . 可以表示工作路徑，如果您的index.html恰巧就在工作路徑上，也可以使用這種方法
  // mainWindow.loadURL(https://www.google.com.tw/') // 直接放URL也可以

  // 視窗關閉後，將mainWindow指向空引用，即做回收釋放內存
  mainWindow.on("closed", () => {
    mainWindow = null
  })
}

app.on("ready", createWindow)
app.on("window-all-closed", () => app.exit(0))

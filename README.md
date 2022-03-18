# electron-tutorial

[Electron](https://zh.wikipedia.org/wiki/Electron) : 可以使用前端技術(css,js,html)來打造桌面應用程式的GUI

Electron自帶[Chromium]，所以您不要擔心瀏覽器的問題，反正它自帶了。

您只要準備好您的前端文件，再把Electron整包鑲入，即可運行。

## 下載electron

訪問 [releases](https://github.com/electron/electron/releases/) 頁面
1. 選擇您要的版本，
2. 查看`Assets`
3. 挑選適合您的項目即可 (建議下載zip檔就行了)

或者直接使用以下網址

> https://github.com/electron/electron/releases/download/[version]/electron-[version]-[os]-[arch].zip
 
例如: os: `win32`, Arch: amd64, version: v11.4.3
> https://github.com/electron/electron/releases/download/v11.4.3/electron-v11.4.3-win32-x64.zi

----

此項目已經把整個[node.js](https://nodejs.org/en/) <sup>包含npm.exe (node.js自帶)</sup> 都打包進去


[Electron]: https://github.com/electron/electron
[Chromium]: https://zh.wikipedia.org/wiki/Chromium

## Quick Start

cd到electron.exe的資料夾，或者要把此資料夾加到環境變數都行，

執行

> electron.exe path-to-app

其中path-to-app是您的app資料夾路徑，例如[此資料夾](src/)

## 相關連結
- [electronjs.API參考](https://www.electronjs.org/docs/latest/api/app)
- [nodejs.API](https://nodejs.org/docs/latest/api/)

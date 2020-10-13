const { protocol } = require("electron");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    win = new BrowserWindow({show:false, backgroundColor:'#f4f7d3'});
    win.maximize();
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('ready-to-show',()=>win.show());

    win.on('closed',()=>{
        win = null;
    });
}

app.on('ready',createWindow);
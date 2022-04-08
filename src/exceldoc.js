const vscode = require('vscode')

 class ExcelDoc {
     constructor(uri){
         this.uri = uri
     }

     setWebviewPanel(webviewpannel){
         webviewpannel.webview.html = `<html><body><h1>Hello world</h1></body></html>`
     }
 }

 module.exports = ExcelDoc
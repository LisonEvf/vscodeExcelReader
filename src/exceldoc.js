const vscode = require('vscode')
const XLSX = require('xlsx')
const fs = require('fs');

 class ExcelDoc {
     constructor(uri){
         this.uri = uri
     }

     setWebviewPanel(webviewpannel){
         console.log(fs.readFileSync(this.uri.fsPath))
         let workbook = XLSX.read(fs.readFileSync(this.uri.fsPath) ,{type: 'buffer'})
         this.webviewpannel = webviewpannel
         this.webviewpannel.webview.html = XLSX.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[0]])
         this.webviewpannel.onDidDispose(()=>{
             this.webviewpannel = null
         })
     }
 }

 module.exports = ExcelDoc
const vscode = require('vscode')

 class erp {
    constructor(context){
        this.extensionPath = context.extensionPath;
    }

    openCustomDocument(uri,context,token){
        return {uri,function(){}}
    }

    resolveCustomEditor(doc,webviewpanel,token){
        webviewpanel.webview.html = 'yes'
    }
}
module.exports = erp
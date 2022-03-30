const vscode = require('vscode')

 class CustomEditorProvider {
    constructor(context){
        this.extensionPath = context.extensionPath;
    }

    openCustomDocument(uri,context,token){
        vscode.commands.executeCommand('workbench.action.moveEditorToBelowGroup');
        // vscode.commands.executeCommand('workbench.action.closeActiveEditor')
        // vscode.commands.executeCommand('workbench.action.splitEditorToBelowGroup')
        // vscode.commands.executeCommand('workbench.action.showpanel', 'extension.custom-editor')

        // if exist below group
        // log vscode.window.visibleTextEditors.length
        console.log(vscode.window.groups.length)           
        
        // workbench
        return {uri,isClosed:false}
    }

    resolveCustomEditor(doc,webviewpanel,token){
        //log the uri
        vscode.commands.executeCommand('workbench.action.focusAboveGroup')
        // console.log(doc.uri)
        
        webviewpanel.webview.html = `<html><body><h1>Hello world</h1></body></html>`

       
        
    }
    
}
module.exports = CustomEditorProvider
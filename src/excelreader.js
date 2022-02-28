const vscode = require('vscode')

const provider = require('./provider/excelreaderprovider')

module.exports = function(context) {
    context.subscriptions.push(
        vscode.window.registerCustomEditorProvider('excelreader.erv'),
        new provider(),
        {
            webviewOptions: { 
                retainContextWhenHidden: true, 
                enableFindWidget: true 
            }
        })
}
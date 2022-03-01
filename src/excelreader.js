const vscode = require('vscode')

const provider = require('./provider/excelreaderprovider')

module.exports = function(context) {
    context.subscriptions.push(
        vscode.window.registerCustomEditorProvider('excelreader.erv',
        new provider(context),
        {
            webviewOptions: { 
                retainContextWhenHidden: true, 
                enableFindWidget: true 
            }
        })
    )

    context.subscriptions.push(
        vscode.window.registerTreeDataProvider('excelreaderview',function(){

        })
    )
}
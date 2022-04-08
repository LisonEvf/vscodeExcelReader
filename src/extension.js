// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const ExcelDoc = require('./exceldoc');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "excelreader" is now active!');

	//https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/references/commands
	//https://code.visualstudio.com/api/references/when-clause-contexts
	//https://www.bookstack.cn/read/VS-Code-Extension-Doc-ZH/docs-extensibility-reference-vscode-api-commands.md

	context.subscriptions.push(
		vscode.window.registerCustomEditorProvider('excelreader.editor',
		new (class CustomEditorProvider{
			openCustomDocument(uri,context,token) {
				vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup').then(() => {
					if(vscode.window.visibleTextEditors.length <= 0){
						vscode.commands.executeCommand('workbench.action.editorLayoutTwoRows')
						.then(() => vscode.commands.executeCommand('workbench.action.moveEditorToNextGroup'))
						.then(() => vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup'))
					}
				})
				return new ExcelDoc(uri);
			}
			resolveCustomEditor(doc,webviewpanel,token) {
				doc.setWebviewPanel(webviewpanel);
			}
		})(),
		{
			webviewOptions: {
				retainContextWhenHidden: true,
				enableFindWidget: true
			
			}
		})
	)	
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

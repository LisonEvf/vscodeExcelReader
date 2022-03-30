const vscode = require('vscode')

 class TreeDataProvider {
    constructor(context){
        this.extensionPath = context.extensionPath;
    }
}
module.exports = TreeDataProvider
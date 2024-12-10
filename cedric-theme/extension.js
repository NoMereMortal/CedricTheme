// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Cedric Theme is now active!');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
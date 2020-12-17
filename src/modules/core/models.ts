import * as vscode from 'vscode';

export default class BasicTreeItem extends vscode.TreeItem {
  constructor(
    public id: string,
    public label: string,
    public type: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public iconPath?: any,
  ) {
    super(label, collapsibleState);
    this.id = id;
    this.iconPath = iconPath;
    this.contextValue = type;
  }
}
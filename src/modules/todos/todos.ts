import * as vscode from 'vscode';
import BasicTreeItem from '../core/models';
import {OpenAPI, Service} from '../../api';
import {TodoTreeItem} from './models';

export class TodosProvider implements vscode.TreeDataProvider<BasicTreeItem> {

  private _onDidChangeTreeData: vscode.EventEmitter<BasicTreeItem | undefined | void> = new vscode.EventEmitter<BasicTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<BasicTreeItem | undefined | void> = this._onDidChangeTreeData.event;

  refresh(): void {
		this._onDidChangeTreeData.fire();
	}

  getTreeItem(element: BasicTreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: BasicTreeItem): Thenable<BasicTreeItem[]> {
    if(OpenAPI.TOKEN === undefined) return Promise.resolve([]);
    if(element === undefined) {
      return Service.getService158().then((value) => {
        let todos = value.data.map((todo) => new TodoTreeItem(
          todo.content.text,
          todo,
          vscode.TreeItemCollapsibleState.None
        ));
        todos.sort((a, b) => {
          if(!a.isOpen) return 1;
          else if(!b.isOpen) return -1;
          return 0;
        })
        return todos;
      });
    }
    return Promise.resolve([]);
  }
}

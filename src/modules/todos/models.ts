import * as vscode from 'vscode';
import * as path from 'path';
import {TodoContent, TodoItemRecord} from '../../api';
import BasicTreeItem from '../core/models';

export class TodoTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public todo: TodoItemRecord,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(todo.id, label, "todo", collapsibleState);

    const kind = (this.todo.content as TodoContent).kind;
    switch(kind) {
      case "REGULAR": this.label = "📝 - " + this.label; break;
      case "MESSAGE": this.label = "💬 - " + this.label; break;
      case "ISSUE": this.label = "🐞 - " + this.label; break;
    }
  }
  iconPath = !this.isOpen
    ? path.join(__filename, '..', '..', 'media', 'icons', 'check-circle.svg')
    : path.join(__filename, '..', '..', 'media', 'icons', 'circle.svg')
  contextValue = "todo-" + (this.isOpen ? "open" : "closed")

  get isOpen() {
    return this.todo._status === "Open";
  }

}

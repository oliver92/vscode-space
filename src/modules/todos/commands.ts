import * as vscode from 'vscode';
import {Service} from '../../api';
import {TodosProvider} from './todos';

export default class TodoCommands {

  todosProvider: TodosProvider;
  constructor(todosProvider: TodosProvider) {
    this.todosProvider = todosProvider;
  }

  async createTodo() {
    try {
      const text = await vscode.window.showInputBox({placeHolder: "Text", prompt: "Enter TO-DO text"});
      const dueDate = await vscode.window.showInputBox({value: this._formatDate(new Date()), prompt: "Due date (optional)"});
      if(!text) return;

      await Service.postService115({
        text: text,
        dueDate: dueDate
      });

      vscode.window.showInformationMessage('TO-DO created');
      this.todosProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  async deleteTodo(args: any) {
    try {
      const confirmation = await vscode.window.showQuickPick(["Yes", "No"], {placeHolder: "Are you sure you want to delete this TO-DO?", canPickMany: false});
      if(!confirmation || confirmation === "No" || confirmation !== "Yes") return;

      await Service.deleteService69(args.todo.id);

      vscode.window.showInformationMessage('TO-DO deleted');
      this.todosProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  async markTodoClosed(args: any) {
    try {
      await Service.patchService49(args.todo.id, {open: false});

      vscode.window.showInformationMessage('TO-DO marked as done');
      this.todosProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  async markTodoOpen(args: any) {
    try {
      await Service.patchService49(args.todo.id, {open: true});

      vscode.window.showInformationMessage('TO-DO marked as opened');
      this.todosProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  _formatDate(date: Date): string {
    let year: string = date.getFullYear().toString();
    let month: string = (date.getMonth() + 1).toString(); month = parseInt(month) > 9 ? month : ("0" + month);
    let day: string = date.getDate() > 9 ? date.getDate().toString() : ("0" + date.getDate());
    return `${year}-${month}-${day}`;
  }
}

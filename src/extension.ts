import * as vscode from 'vscode';
import { OpenAPI } from './api/index';
import { ProjectsProvider } from './modules/projects/projects';
import ProjectCommands from './modules/projects/commands';
import { TodosProvider } from './modules/todos/todos';
import TodoCommands from './modules/todos/commands';

export function activate(context: vscode.ExtensionContext) {

	vscode.commands.executeCommand('setContext', 'jbspaceViewsConfig.showWelcome', true);

	const projectsProvider = new ProjectsProvider();
	const projectsCommands = new ProjectCommands(projectsProvider);
	vscode.window.registerTreeDataProvider('jbspaceProjects', projectsProvider);

	const todosProvider = new TodosProvider();
	const todosCommands = new TodoCommands(todosProvider);
	vscode.window.registerTreeDataProvider('jbspaceTodos', todosProvider);

	OpenAPI.BASE = context.globalState.get('vscode-jb-space.url') ?? "localhost";
	OpenAPI.TOKEN = context.globalState.get('vscode-jb-space.token');
	if(OpenAPI.TOKEN !== undefined) {
		vscode.commands.executeCommand('setContext', 'jbspaceViewsConfig.showWelcome', false);
		projectsProvider.refresh();
		todosProvider.refresh();
	}

	const setCredentialsCmd = vscode.commands.registerCommand('jbspace.setCredentials', async () => {
		let url = await vscode.window.showInputBox({placeHolder: "ex. https://organization.jetbrains.space", prompt: "URL of your JB Space"});
		const token = await vscode.window.showInputBox({placeHolder: "Token", prompt: "Enter/Paste your Token here"});
		if(url !== undefined && token !== undefined) {
			url = url.endsWith("/") ? (url + "api/http") : (url + "/api/http");
			context.globalState.update('vscode-jb-space.url', url);
			context.globalState.update('vscode-jb-space.token', token);
			OpenAPI.BASE = url;
			OpenAPI.TOKEN = token;
			vscode.commands.executeCommand('setContext', 'jbspaceViewsConfig.showWelcome', false);
			projectsProvider.refresh();
			todosProvider.refresh();
		}
	});
	context.subscriptions.push(setCredentialsCmd);

	const refreshProjectsCmd = vscode.commands.registerCommand('jbspaceProjects.refreshProjects', () => projectsProvider.refresh());
	const createProjectCmd = vscode.commands.registerCommand('jbspaceProjects.createProject', (args) => projectsCommands.createProject(args));
	context.subscriptions.push(refreshProjectsCmd);
	context.subscriptions.push(createProjectCmd);

	const createRepoCmd = vscode.commands.registerCommand('jbspaceProjects.createRepository', (args) => projectsCommands.createRepository(args));
	const cloneRepoWithHttpCmd = vscode.commands.registerCommand('jbspaceProjects.cloneRepositoryWithHttp', (args) => projectsCommands.cloneRepository(args));
	const cloneRepoWithSshCmd = vscode.commands.registerCommand('jbspaceProjects.cloneRepositoryWithSsh', (args) => projectsCommands.cloneRepository(args, true));
	const deleteRepoCmd = vscode.commands.registerCommand('jbspaceProjects.deleteRepository', (args) => projectsCommands.deleteRepository(args));
	context.subscriptions.push(createRepoCmd);
	context.subscriptions.push(cloneRepoWithHttpCmd);
	context.subscriptions.push(cloneRepoWithSshCmd);
	context.subscriptions.push(deleteRepoCmd);

	const createIssueCmd = vscode.commands.registerCommand('jbspaceProjects.createIssue', (args) => projectsCommands.createIssue(args));
	const resolveIssueCmd = vscode.commands.registerCommand('jbspaceProjects.markIssueResolved', (args) => projectsCommands.markIssueResolved(args, true));
	const unresolveIssueCmd = vscode.commands.registerCommand('jbspaceProjects.markIssueUnresolved', (args) => projectsCommands.markIssueResolved(args, false));
	const deleteIssueCmd = vscode.commands.registerCommand('jbspaceProjects.deleteIssue', (args) => projectsCommands.deleteIssue(args));
	context.subscriptions.push(createIssueCmd);
	context.subscriptions.push(resolveIssueCmd);
	context.subscriptions.push(unresolveIssueCmd);
	context.subscriptions.push(deleteIssueCmd);


	const refreshTodosCmd = vscode.commands.registerCommand('jbspaceTodos.refreshTodos', () => todosProvider.refresh());
	const createTodoCmd = vscode.commands.registerCommand('jbspaceTodos.createTodo', (args) => todosCommands.createTodo(args));
	context.subscriptions.push(refreshTodosCmd);
	context.subscriptions.push(createTodoCmd);

	const deleteTodoCmd = vscode.commands.registerCommand('jbspaceTodos.deleteTodo', (args) => todosCommands.deleteTodo(args));
	const closeTodoCmd = vscode.commands.registerCommand('jbspaceTodos.markTodoClosed', (args) => todosCommands.markTodoClosed(args));
	const openTodoCmd = vscode.commands.registerCommand('jbspaceTodos.markTodoOpen', (args) => todosCommands.markTodoOpen(args));
	context.subscriptions.push(deleteTodoCmd);
	context.subscriptions.push(closeTodoCmd);
	context.subscriptions.push(openTodoCmd);
}

// this method is called when your extension is deactivated
export function deactivate() {}

import * as vscode from 'vscode';
import { OpenAPI } from './api';
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

	const refreshWorkspace = () => {
		projectsProvider.refresh();
		todosProvider.refresh();
	}

	if(OpenAPI.TOKEN !== undefined) {
		vscode.commands.executeCommand('setContext', 'jbspaceViewsConfig.showWelcome', false);
		refreshWorkspace();
	}

	const registerCommand = (name: string, fn: any, ...extraArgs: any[]) =>
		vscode.commands.registerCommand(name, (args) => fn(args, ...extraArgs), fn)


	const vsCommands = [
		// Extension commands
		registerCommand('jbspace.setCredentials', async () => projectsCommands.setToken(context).then(refreshWorkspace)),
        registerCommand('jbspace.clearCredentials', async () => projectsCommands.clearToken(context).then(refreshWorkspace)),

		// Project commands
		registerCommand('jbspaceProjects.refreshProjects', projectsProvider.refresh),
		registerCommand('jbspaceProjects.createProject', projectsCommands.createProject),

		// Repository commands
		registerCommand('jbspaceProjects.createRepository', projectsCommands.createRepository),
		registerCommand('jbspaceProjects.cloneRepositoryWithHttp', projectsCommands.cloneRepository),
		registerCommand('jbspaceProjects.cloneRepositoryWithSsh', projectsCommands.cloneRepository, true),
		registerCommand('jbspaceProjects.deleteRepository', projectsCommands.deleteRepository),

		// Issues commands
		registerCommand('jbspaceProjects.createIssue', projectsCommands.createIssue),
		registerCommand('jbspaceProjects.markIssueResolved', projectsCommands.markIssueResolved, true),
		registerCommand('jbspaceProjects.markIssueUnresolved', projectsCommands.markIssueResolved, false),
		registerCommand('jbspaceProjects.deleteIssue', projectsCommands.deleteIssue),

		// Todos commands
		registerCommand('jbspaceTodos.refreshTodos', todosProvider.refresh),
		registerCommand('jbspaceTodos.createTodo', todosCommands.createTodo),
		registerCommand('jbspaceTodos.deleteTodo', todosCommands.deleteTodo),
		registerCommand('jbspaceTodos.markTodoClosed', todosCommands.markTodoClosed),
		registerCommand('jbspaceTodos.markTodoOpen', todosCommands.markTodoOpen),
	];

	vsCommands.map((command) => context.subscriptions.push(command));
}

// this method is called when your extension is deactivated
export function deactivate() {}

import * as vscode from 'vscode';
import {IssueStatus, OpenAPI, Service} from '../../api';
import {ProjectsProvider} from './projects';
import {RepositoryUrls} from "../../api/models/RepositoryUrls";

export default class ProjectCommands {

  projectProvider: ProjectsProvider;
  constructor(projectProvider: ProjectsProvider) {
    this.projectProvider = projectProvider;
  }

  createProject = async () => {
    try {
      const projectKey = await vscode.window.showInputBox({placeHolder: "Key", prompt: "Enter Project Key"});
      const projectName = await vscode.window.showInputBox({placeHolder: "Name", prompt: "The name of the project"});
      const projectDescription = await vscode.window.showInputBox({placeHolder: "Description", prompt: "Decription of the project (can be empty)"});
      const isPrivate = await vscode.window.showQuickPick(["Yes", "No"], {placeHolder: "Do you want the project to be private?", canPickMany: false});
      const tags = await vscode.window.showInputBox({placeHolder: "Tags", prompt: "Enter comma separated tags for the project"});
      if(!projectKey || !projectName) return;

      await Service.postService47({
        key: {key: projectKey},
        name: projectName,
        description: projectDescription,
        private: isPrivate === "Yes",
        tags: tags ? tags.split(",") : undefined
      });

      vscode.window.showInformationMessage('Project created');
      this.projectProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  createRepository = async (args: any) => {
    try {
      const repositoryName = await vscode.window.showInputBox({placeHolder: "Name", prompt: "The name of the repository"});
      const repositoryDescription = await vscode.window.showInputBox({placeHolder: "Description", prompt: "Decription of the repository (can be empty)"});
      const defaultBranch = await vscode.window.showInputBox({placeHolder: "master", prompt: "Default branch (leave empty for master)"});
      if(!repositoryName) return;
      await Service.postService78(args.project.id, repositoryName, undefined, {
        description: repositoryDescription,
        initialize: true,
        defaultBranch: defaultBranch,
        defaultSetup: true
      });

      vscode.window.showInformationMessage('Repository created');
      this.projectProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  cloneRepository = async (args: any, useSsh:boolean = false) => {
    try {
      const repositoryUrls = (await Service.getService163(args.project.id, args.repository.name) as RepositoryUrls);
      const url = useSsh ? repositoryUrls.sshUrl : repositoryUrls.httpUrl;
      vscode.commands.executeCommand('git.clone', url)
    } catch (e) {
      vscode.window.showErrorMessage(e.message);
    }
  }

  deleteRepository = async (args: any) => {
    try {
      const confirmation = await vscode.window.showQuickPick(["Yes", "No"], {placeHolder: "Are you sure you want to delete this repository?", canPickMany: false});
      if(!confirmation || confirmation === "No" || confirmation !== "Yes") return;

      await Service.deleteService39(args.project.id, args.repository.name);

      vscode.window.showInformationMessage('Repository deleted');
      this.projectProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  createIssue = async (args: any) => {
    try {
      const statuses = await Service.getService98(args.project.id);
      const title = await vscode.window.showInputBox({placeHolder: "Title", prompt: "The title of the issue"});
      const description = await vscode.window.showInputBox({placeHolder: "Description", prompt: "The description of the issue"});
      const statusName = await vscode.window.showQuickPick((statuses as IssueStatus[]).map((status) => status.name), {placeHolder: "Status", canPickMany: false});
      if(!title || !statusName || !(statuses as IssueStatus[]).find((status) => status.name === statusName)) return;

      await Service.postService70(args.project.id, {
        title: title,
        description: description,
        assignee: "me",
        status: (statuses as IssueStatus[]).find((status) => status.name === statusName)!.id
      });

      vscode.window.showInformationMessage('Issue created');
      this.projectProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  markIssueResolved = async (args: any, resolved: boolean) => {
    try {
      await Service.postService72(args.project.id, args.issue.id, {resolved: resolved});

      vscode.window.showInformationMessage('Issue marked as resolved');
      this.projectProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  deleteIssue = async (args: any) => {
    //TODO: show are you sure dialog
    try {
      const confirmation = await vscode.window.showQuickPick(["Yes", "No"], {placeHolder: "Are you sure you want to delete this issue?", canPickMany: false});
      if(!confirmation || confirmation === "No" || confirmation !== "Yes") return;
      await Service.deleteService35(args.project.id, args.issue.id);

      vscode.window.showInformationMessage('Issue deleted');
      this.projectProvider.refresh();
    } catch(e) {
      vscode.window.showErrorMessage(e.message)
    }
  }

  setToken = async (context: vscode.ExtensionContext) => {
    let url = await vscode.window.showInputBox({
      placeHolder: "ex. https://organization.jetbrains.space",
      prompt: "URL of your JB Space"
    });
    const token = await vscode.window.showInputBox({placeHolder: "Token", prompt: "Enter/Paste your Token here"});
    if (url !== undefined && token !== undefined) {
      url = url.endsWith("/") ? (url + "api/http") : (url + "/api/http");
      context.globalState.update('vscode-jb-space.url', url);
      context.globalState.update('vscode-jb-space.token', token);
      OpenAPI.BASE = url;
      OpenAPI.TOKEN = token;
      vscode.commands.executeCommand('setContext', 'jbspaceViewsConfig.showWelcome', false);
    }
  }

  clearToken = async(context: vscode.ExtensionContext) => {
    const site = context.globalState.get('vscode-jb-space.url');
    context.globalState.update('vscode-jb-space.url', undefined);
    context.globalState.update('vscode-jb-space.token', undefined);
    OpenAPI.BASE = "/";
    OpenAPI.TOKEN = undefined;
    vscode.window.showInformationMessage(`Logged out of ${site}`);
  }
}

import * as vscode from 'vscode';
import * as path from 'path';
import BasicTreeItem from '../core/models';
import { Service } from '../../api/services/Service';
import { ChecklistSorting, IssuesSorting, IssueStatus, OpenAPI, PlanItemChildren, PR_Project } from '../../api/index';
import { ChecklistChildTreeItem, ChecklistTreeItem, IssueTreeItem, ProjectOptionTreeItem, ProjectTreeItem, RepositoryTreeItem } from './models';

//TODO: add tree item commands
export class ProjectsProvider implements vscode.TreeDataProvider<BasicTreeItem> {
  
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
    //projects
    if(element === undefined) {
      return Service.getService57().then((value) => {
        return value.data.map((project) => new ProjectTreeItem(
          project.name, 
          project, 
          vscode.TreeItemCollapsibleState.Collapsed
        ));
      });
    }
    //project
    else if(element.type === "project") {
      return Service.getService61(element.id, "id,name,repos").then((value) => {
        return [
          new ProjectOptionTreeItem("repositories", (value as PR_Project), vscode.TreeItemCollapsibleState.Collapsed, path.join(__filename, '..', '..', 'media', 'icons', 'code-solid.svg')),
          new ProjectOptionTreeItem("checklists", (value as PR_Project), vscode.TreeItemCollapsibleState.Collapsed, path.join(__filename, '..', '..', 'media', 'icons', 'list-alt.svg')),
          new ProjectOptionTreeItem("issues", (value as PR_Project), vscode.TreeItemCollapsibleState.Collapsed, path.join(__filename, '..', '..', 'media', 'icons', 'bug-solid.svg'))
        ];
      });
    }
    //repository
    else if(element.type === "repositories") {
      if((element as ProjectOptionTreeItem).project.repos.length < 1) return Promise.resolve([new BasicTreeItem((element as ProjectOptionTreeItem).project.id + "-no-repositories", "No repositories", "no-result", vscode.TreeItemCollapsibleState.None)])
      return Promise.resolve((element as ProjectOptionTreeItem).project.repos.map((repo) => new RepositoryTreeItem(
        repo.name, 
        (element as ProjectOptionTreeItem).project, 
        repo, 
        vscode.TreeItemCollapsibleState.None
      )))
    }
    //checklists
    else if(element.type === "checklists") {
      return Service.getService93((element as ProjectOptionTreeItem).project.id, null, 100, null, ChecklistSorting.UPDATED, true).then((value) => {
        if(value.data.length < 1) return Promise.resolve([new BasicTreeItem((element as ProjectOptionTreeItem).project.id + "-no-checklist", "Checklists empty", "no-result", vscode.TreeItemCollapsibleState.None)])
        return value.data.map((checklist) => new ChecklistTreeItem(
          checklist.name, 
          (element as ProjectOptionTreeItem).project, 
          checklist, 
          vscode.TreeItemCollapsibleState.Collapsed
        ));
      });
    }
    else if(element.type === "checklist") {
      return Service.getService95((element as ChecklistTreeItem).project.id, (element as ChecklistTreeItem).checklist.id, this.getChecklistFields(3)).then((value) => {
        if((value as PlanItemChildren[]).length < 1) return Promise.resolve([new BasicTreeItem((element as ChecklistTreeItem).checklist.id + "-no-checklist-children", "No further checklists in tree", "no-result", vscode.TreeItemCollapsibleState.None)])
        return (value as PlanItemChildren[]).pop()!.children.map((checklistChild) => new ChecklistChildTreeItem(
          checklistChild.simpleText ?? checklistChild.id, 
          (element as ChecklistTreeItem).project, 
          checklistChild, 
          checklistChild.children && checklistChild.children.length > 0 ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None
        ));
      });
    }
    else if(element.type === "checklistChild") {
      return Promise.resolve((element as ChecklistChildTreeItem).checklistChild.children.map((checklistChild) => new ChecklistChildTreeItem(
        checklistChild.simpleText ?? checklistChild.id, 
        (element as ChecklistTreeItem).project, 
        checklistChild, 
        checklistChild.children && checklistChild.children.length > 0 ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None
      )))
    }
    //issue
    else if(element.type === "issues") {
      //get statuses ids
      return Service.getService98((element as ProjectOptionTreeItem).project.id).then((statuses) => {
        //get issues
        return Service.getService96((element as ProjectOptionTreeItem).project.id, [], (statuses as IssueStatus[]).map((status) => status.id), IssuesSorting.UPDATED, true).then((value) => {
          if(value.data.length < 1) return Promise.resolve([new BasicTreeItem((element as ProjectOptionTreeItem).project.id + "-no-issues", "No issues", "no-result", vscode.TreeItemCollapsibleState.None)])
          return value.data.map((issue) => new IssueTreeItem(
            issue.title, 
            (element as ProjectOptionTreeItem).project, 
            issue, 
            (statuses as IssueStatus[]), 
            vscode.TreeItemCollapsibleState.None
          ));
        });
      });
    }
    else {
      return Promise.resolve([]);
    }
  }

  getChecklistFields(depth: number): string {
    return `children(issue,id,checklistId,hasChildren,simpleDone,simpleText,${(depth === 0 ? "children" : this.getChecklistFields(depth -1))})`;
  }
}




import * as vscode from 'vscode';
import * as path from 'path';
import BasicTreeItem from '../core/models';
import { Checklist, Issue, IssueStatus, PlanItem, PR_Project, PR_RepositoryInfo } from '../../api/index';

export class ProjectTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public project: PR_Project,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public treeID?: string | null,
    public icon?: any | null
  ) {
    super(treeID ?? project.id, label, "project", collapsibleState, icon ?? path.join(__filename, '..', '..', 'media', 'icons', 'folder-open.svg'));
  }
}

export class ProjectOptionTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public project: PR_Project,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public icon: any
  ) {
    super(`${label}-${project.id}`, label, label, collapsibleState, icon);
  }
}

export class RepositoryTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public project: PR_Project,
    public repository: PR_RepositoryInfo,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(repository.id ?? "", label, "repository", collapsibleState, path.join(__filename, '..', '..', 'media', 'icons', 'code-branch-solid.svg'));
  }
}

export class ChecklistTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public project: PR_Project,
    public checklist: Checklist,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(checklist.id, label, "checklist", collapsibleState);
  }
  iconPath = this.isDone
    ? path.join(__filename, '..', '..', 'media', 'icons', 'check-square.svg')
    : path.join(__filename, '..', '..', 'media', 'icons', 'stop-solid.svg');
  contextValue = "checklist-" + (this.isDone ? "done" : "notdone")

  get isDone() {
    return this.checklist.doneItemsCount === this.checklist.totalItemsCount;
  }
}

export class ChecklistChildTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public project: PR_Project,
    public checklistChild: PlanItem,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(checklistChild.id, label, "checklistChild", collapsibleState);
  }
  iconPath = this.isDone
    ? path.join(__filename, '..', '..', 'media', 'icons', 'check-square.svg')
    : path.join(__filename, '..', '..', 'media', 'icons', 'stop-solid.svg');
  contextValue = "checklist-" + (this.isDone ? "done" : "notdone")

  get isDone() {
    return this.checklistChild.simpleDone;
  }
}

export class IssueTreeItem extends BasicTreeItem {
  constructor(
    public label: string,
    public project: PR_Project,
    public issue: Issue,
    public statuses: IssueStatus[],
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(issue.id, label, "issue", collapsibleState);
  }
  iconPath = this.isResolved 
    ? path.join(__filename, '..', '..', 'media', 'icons', 'check-circle.svg') 
    : path.join(__filename, '..', '..', 'media', 'icons', 'circle.svg')
  contextValue = "issue-" + (this.isResolved ? "resolved" : "unresolved");

  get isResolved() {
    return this.statuses.find((status) => status.id === this.issue.status.id)?.resolved
  }
}
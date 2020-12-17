/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PR_Project } from './PR_Project';

export type RepositoryMenuActionContext = {
    menuId: string;
    project: PR_Project;
    repo: string;
}

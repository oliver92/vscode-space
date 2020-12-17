/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectKey } from './ProjectKey';

export type M2TaskExecutionFailureItemContent = {
    taskExecutionId: string;
    taskExecutionName: string;
    repoName: string;
    branchName: string;
    commit: string;
    shortCommitMessage: string;
    project: ProjectKey;
    finishDateTime: number;
    triggerInfo: string;
    details: string;
}

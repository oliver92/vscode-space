/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Branch } from './Branch';
import type { ExecutionDisplayStatus } from './ExecutionDisplayStatus';
import type { JobTriggerType } from './JobTriggerType';
import type { PR_Project } from './PR_Project';

export type AutomationJobUnfurlDetails = {
    jobId: string;
    jobName: string;
    projectRef: PR_Project;
    repoName: string;
    jobExecutionDisplayStatusFilter?: ExecutionDisplayStatus | null;
    jobTriggerFilter?: JobTriggerType | null;
    branch?: Branch | null;
}

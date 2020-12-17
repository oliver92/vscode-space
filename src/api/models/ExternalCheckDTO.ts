/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitExecutionStatus } from './CommitExecutionStatus';

export type ExternalCheckDTO = {
    repository: string;
    revision: string;
    executionStatus: CommitExecutionStatus;
    url: string;
    externalServiceName: string;
    taskName: string;
    taskId: string;
    timestamp: number;
    description?: string | null;
}

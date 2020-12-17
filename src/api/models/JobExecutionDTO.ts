/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstimationDTO } from './EstimationDTO';
import type { ExecutionStatus } from './ExecutionStatus';
import type { FailureConditionDTO } from './FailureConditionDTO';

export type JobExecutionDTO = {
    executionId: string;
    executionNumber: number;
    jobId: string;
    jobName: string;
    branch: string;
    status: ExecutionStatus;
    triggeredTime: number;
    startedTime?: number | null;
    finishedTime?: number | null;
    changesFromExclude: string;
    changesCount: number;
    predictedEndTime?: EstimationDTO | null;
    failureConditions: Array<FailureConditionDTO>;
}

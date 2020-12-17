/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export enum CommitExecutionStatus {
    SCHEDULED = 'SCHEDULED',
    PENDING = 'PENDING',
    READY_TO_START = 'READY_TO_START',
    FAILED_TO_START = 'FAILED_TO_START',
    RUNNING = 'RUNNING',
    FAILING = 'FAILING',
    SUCCEEDED = 'SUCCEEDED',
    TERMINATED = 'TERMINATED',
    FAILED = 'FAILED',
    HANGING = 'HANGING',
}
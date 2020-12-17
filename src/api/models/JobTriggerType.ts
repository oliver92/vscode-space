/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export enum JobTriggerType {
    MANUAL = 'MANUAL',
    GIT_PUSH = 'GIT_PUSH',
    SCHEDULE = 'SCHEDULE',
    GIT_BRANCH_DELETED = 'GIT_BRANCH_DELETED',
    CODE_REVIEW_OPENED = 'CODE_REVIEW_OPENED',
    CODE_REVIEW_CLOSED = 'CODE_REVIEW_CLOSED',
}
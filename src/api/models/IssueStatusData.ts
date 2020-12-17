/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueStatus } from './IssueStatus';

export type IssueStatusData = {
    existingId?: string | null;
    name: string;
    resolved: boolean;
    color: string;
    originalStatus?: IssueStatus | null;
}

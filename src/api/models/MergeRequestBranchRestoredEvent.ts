/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MergeRequestBranchType } from './MergeRequestBranchType';

export type MergeRequestBranchRestoredEvent = {
    repository: string;
    branch: string;
    branchType: MergeRequestBranchType;
}

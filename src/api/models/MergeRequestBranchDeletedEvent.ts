/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MergeRequestBranchType } from './MergeRequestBranchType';

export type MergeRequestBranchDeletedEvent = {
    repository: string;
    branch: string;
    branchType: MergeRequestBranchType;
}

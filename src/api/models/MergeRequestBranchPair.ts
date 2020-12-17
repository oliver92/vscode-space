/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MergeRequestBranch } from './MergeRequestBranch';

export type MergeRequestBranchPair = {
    repository: string;
    sourceBranch: string;
    targetBranch: string;
    sourceBranchRef: string;
    sourceBranchInfo?: MergeRequestBranch | null;
    targetBranchInfo?: MergeRequestBranch | null;
}

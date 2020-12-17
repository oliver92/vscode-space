/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchInfo } from './BranchInfo';

export type TrackedBranchesInReview = {
    repository: string;
    branches: Array<BranchInfo>;
}

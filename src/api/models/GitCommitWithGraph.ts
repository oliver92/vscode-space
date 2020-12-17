/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewRecord } from './CodeReviewRecord';
import type { GitCommitInfo } from './GitCommitInfo';
import type { GitGraphLayoutLine } from './GitGraphLayoutLine';

export type GitCommitWithGraph = {
    repositoryName: string;
    commit: GitCommitInfo;
    reviews: Array<CodeReviewRecord>;
    layout?: GitGraphLayoutLine | null;
    unreachable: boolean;
}

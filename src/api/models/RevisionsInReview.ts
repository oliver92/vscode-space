/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitCommitWithGraph } from './GitCommitWithGraph';
import type { RepositoryInReview } from './RepositoryInReview';

export type RevisionsInReview = {
    repository: RepositoryInReview;
    commits: Array<GitCommitWithGraph>;
}

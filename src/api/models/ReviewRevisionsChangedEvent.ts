/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewRecord } from './CodeReviewRecord';
import type { RepositoryCommitRecord } from './RepositoryCommitRecord';
import type { ReviewRevisionsChangedType } from './ReviewRevisionsChangedType';

export type ReviewRevisionsChangedEvent = {
    commits: Array<RepositoryCommitRecord>;
    changeType: ReviewRevisionsChangedType;
    projectKey?: string | null;
    review?: CodeReviewRecord | null;
}

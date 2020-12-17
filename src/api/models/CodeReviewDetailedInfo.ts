/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewDiscussionCounter } from './CodeReviewDiscussionCounter';
import type { CodeReviewRecord } from './CodeReviewRecord';
import type { RevisionsInReview } from './RevisionsInReview';
import type { TrackedBranchesInReview } from './TrackedBranchesInReview';

export type CodeReviewDetailedInfo = {
    shortInfo: CodeReviewRecord;
    commits: Array<RevisionsInReview>;
    discussionCounter: CodeReviewDiscussionCounter;
    branches: Array<TrackedBranchesInReview>;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeDiscussionRecord } from './CodeDiscussionRecord';
import type { CodeReviewRecord } from './CodeReviewRecord';

export type CodeDiscussionAddedFeedEvent = {
    codeDiscussion: CodeDiscussionRecord;
    codeReview: CodeReviewRecord;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeDiscussionAddedFeedEvent } from './CodeDiscussionAddedFeedEvent';
import type { CodeReviewDiscussionAddedFeedEvent } from './CodeReviewDiscussionAddedFeedEvent';
import type { MergeRequestBranchDeletedEvent } from './MergeRequestBranchDeletedEvent';
import type { MergeRequestBranchRestoredEvent } from './MergeRequestBranchRestoredEvent';
import type { MergeRequestMergedEvent } from './MergeRequestMergedEvent';
import type { ReviewBranchTrackEvent } from './ReviewBranchTrackEvent';
import type { ReviewCompletionStateChangedEvent } from './ReviewCompletionStateChangedEvent';
import type { ReviewerChangedEvent } from './ReviewerChangedEvent';
import type { ReviewRevisionsChangedEvent } from './ReviewRevisionsChangedEvent';
import type { ReviewStateChangedEvent } from './ReviewStateChangedEvent';
import type { ReviewTitleChangedEvent } from './ReviewTitleChangedEvent';

export type FeedEvent = (ReviewStateChangedEvent | MergeRequestMergedEvent | ReviewBranchTrackEvent | ReviewCompletionStateChangedEvent | CodeReviewDiscussionAddedFeedEvent | MergeRequestBranchDeletedEvent | CodeDiscussionAddedFeedEvent | ReviewerChangedEvent | ReviewTitleChangedEvent | ReviewRevisionsChangedEvent | MergeRequestBranchRestoredEvent);

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewParticipantRole } from './CodeReviewParticipantRole';
import type { CodeReviewParticipants } from './CodeReviewParticipants';
import type { CodeReviewPendingMessageCounter } from './CodeReviewPendingMessageCounter';
import type { CodeReviewRecord } from './CodeReviewRecord';
import type { ReviewerState } from './ReviewerState';

export type MeCodeReviewParticipantRecord = {
    id: string;
    role?: CodeReviewParticipantRole | null;
    theirTurn?: boolean | null;
    reviewerState?: ReviewerState | null;
    review: CodeReviewRecord;
    participants: CodeReviewParticipants;
    pendingCounter: CodeReviewPendingMessageCounter;
    archived: boolean;
}

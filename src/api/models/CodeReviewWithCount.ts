/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewParticipants } from './CodeReviewParticipants';
import type { CodeReviewRecord } from './CodeReviewRecord';
import type { GitCommitterProfile } from './GitCommitterProfile';

export type CodeReviewWithCount = {
    review: CodeReviewRecord;
    messagesCount: number;
    authors: Array<GitCommitterProfile>;
    participants: CodeReviewParticipants;
}

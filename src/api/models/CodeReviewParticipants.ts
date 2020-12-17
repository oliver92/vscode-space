/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewParticipant } from './CodeReviewParticipant';
import type { CodeReviewParticipantRecord } from './CodeReviewParticipantRecord';

export type CodeReviewParticipants = {
    id: string;
    participants?: Array<CodeReviewParticipant> | null;
    reviewers: Array<CodeReviewParticipantRecord>;
    authors: Array<CodeReviewParticipantRecord>;
    watchers: Array<CodeReviewParticipantRecord>;
}

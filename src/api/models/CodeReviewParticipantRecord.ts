/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewParticipantRole } from './CodeReviewParticipantRole';
import type { ReviewerState } from './ReviewerState';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type CodeReviewParticipantRecord = {
    id: string;
    projectId: string;
    role: CodeReviewParticipantRole;
    profile: TD_MemberProfile;
    reviewerState?: ReviewerState | null;
    theirTurn?: boolean | null;
    archived: boolean;
}

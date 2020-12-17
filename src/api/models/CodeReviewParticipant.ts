/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewParticipantQualityGateSlot } from './CodeReviewParticipantQualityGateSlot';
import type { CodeReviewParticipantRole } from './CodeReviewParticipantRole';
import type { ReviewerState } from './ReviewerState';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type CodeReviewParticipant = {
    user: TD_MemberProfile;
    role: CodeReviewParticipantRole;
    state?: ReviewerState | null;
    theirTurn?: boolean | null;
    qualityGateSlots?: Array<CodeReviewParticipantQualityGateSlot> | null;
    addedAt?: string | null;
}

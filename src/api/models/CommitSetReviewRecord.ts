/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewParticipant } from './CodeReviewParticipant';
import type { CodeReviewParticipantRecord } from './CodeReviewParticipantRecord';
import type { CodeReviewState } from './CodeReviewState';
import type { Counter } from './Counter';
import type { M2ChannelRecord } from './M2ChannelRecord';
import type { ProjectKey } from './ProjectKey';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type CommitSetReviewRecord = {
    id: string;
    project: ProjectKey;
    projectId: string;
    number: number;
    title: string;
    state: CodeReviewState;
    canBeReopened?: boolean | null;
    createdAt: number;
    createdBy?: TD_MemberProfile | null;
    turnBased?: boolean | null;
    feedChannel?: M2ChannelRecord | null;
    discussionCounter: Counter;
    participants?: Array<CodeReviewParticipant> | null;
    reviewers: Array<CodeReviewParticipantRecord>;
    authors: Array<CodeReviewParticipantRecord>;
    watchers: Array<CodeReviewParticipantRecord>;
}

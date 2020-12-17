/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { CodeReviewParticipants } from './CodeReviewParticipants';
import type { CodeReviewPendingMessageCounter } from './CodeReviewPendingMessageCounter';
import type { CodeReviewRecord } from './CodeReviewRecord';
import type { PR_Project } from './PR_Project';

export type M2ChannelContentCodeReviewFeed = {
    codeReviewId: string;
    notificationDefaults: ChannelSpecificDefaults;
    codeReview?: CodeReviewRecord | null;
    participants?: CodeReviewParticipants | null;
    pendingMessageCounter?: CodeReviewPendingMessageCounter | null;
    project?: PR_Project | null;
}

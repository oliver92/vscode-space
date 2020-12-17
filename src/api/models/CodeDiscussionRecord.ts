/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeDiscussionAnchor } from './CodeDiscussionAnchor';
import type { CodeDiscussionSnippet } from './CodeDiscussionSnippet';
import type { CodeReviewRecord } from './CodeReviewRecord';
import type { M2ChannelRecord } from './M2ChannelRecord';

export type CodeDiscussionRecord = {
    id: string;
    projectId: string;
    anchor: CodeDiscussionAnchor;
    created: string;
    channel: M2ChannelRecord;
    resolved: boolean;
    snippet?: CodeDiscussionSnippet | null;
    pending?: boolean | null;
    review?: CodeReviewRecord | null;
    feedItemId?: string | null;
    reviews?: Array<CodeReviewRecord> | null;
    archived: boolean;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewRecord } from './CodeReviewRecord';
import type { M2ChannelRecord } from './M2ChannelRecord';

export type CodeReviewDiscussionRecord = {
    id: string;
    review: CodeReviewRecord;
    created: string;
    channel: M2ChannelRecord;
    resolved: boolean;
}

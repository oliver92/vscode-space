/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllReactionsToItemRecord } from './AllReactionsToItemRecord';
import type { AttachmentInfo } from './AttachmentInfo';
import type { CPrincipal } from './CPrincipal';
import type { Issue } from './Issue';
import type { M2ChannelRecord } from './M2ChannelRecord';
import type { M2ItemContentDetails } from './M2ItemContentDetails';

export type ChannelItemRecord = {
    text: string;
    details?: M2ItemContentDetails | null;
    author: CPrincipal;
    created: string;
    time: number;
    reactions?: AllReactionsToItemRecord | null;
    thread?: M2ChannelRecord | null;
    projectedItem?: ChannelItemRecord | null;
    attachments?: Array<AttachmentInfo> | null;
    pending?: boolean | null;
    id: string;
    archived: boolean;
    edited?: string | null;
    pinned?: boolean | null;
    suggestedParticipants?: Array<CPrincipal> | null;
    issues: Array<Issue>;
}

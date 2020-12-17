/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentInfo } from './AttachmentInfo';
import type { CPrincipal } from './CPrincipal';
import type { M2ItemContentDetails } from './M2ItemContentDetails';

export type ChannelItemSnapshot = {
    id: string;
    channelId?: string | null;
    text: string;
    details?: M2ItemContentDetails | null;
    author: CPrincipal;
    created: string;
    time: number;
    attachments?: Array<AttachmentInfo> | null;
}

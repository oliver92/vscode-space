/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { M2ChannelRecord } from './M2ChannelRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type M2ChannelContactThread = {
    parent: M2ChannelRecord;
    text?: string | null;
    messageId?: string | null;
    author?: TD_MemberProfile | null;
    messageAuthor?: CPrincipal | null;
    attachments?: string | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelItemRecord } from './ChannelItemRecord';
import type { ChannelParticipant } from './ChannelParticipant';
import type { M2ChannelContact } from './M2ChannelContact';
import type { M2ChannelContentInfo } from './M2ChannelContentInfo';
import type { MessageInfo } from './MessageInfo';

export type M2ChannelRecord = {
    id: string;
    contact: M2ChannelContact;
    totalMessages: number;
    lastMessage?: MessageInfo | null;
    participants?: Array<ChannelParticipant> | null;
    channelArchived?: boolean | null;
    archived: boolean;
    content?: M2ChannelContentInfo | null;
    channel: M2ChannelRecord;
    messages?: Array<ChannelItemRecord> | null;
}

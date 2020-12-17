/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type M2PrivateConversationChannelContent = {
    channelId: string;
    subject?: string | null;
    members: Array<TD_MemberProfile>;
    notificationDefaults?: ChannelSpecificDefaults | null;
}

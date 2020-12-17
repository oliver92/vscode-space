/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { CodeDiscussionRecord } from './CodeDiscussionRecord';

export type M2ChannelContentCodeDiscussion = {
    codeDiscussionId: string;
    notificationDefaults: ChannelSpecificDefaults;
    codeDiscussion?: CodeDiscussionRecord | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllReactionsToItemRecord } from './AllReactionsToItemRecord';
import type { M2ChannelContentRecord } from './M2ChannelContentRecord';
import type { M2ChannelRecord } from './M2ChannelRecord';

export type ArticleChannelRecord = {
    id: string;
    archived: boolean;
    channel: M2ChannelRecord;
    channelContent: M2ChannelContentRecord;
    reactions: AllReactionsToItemRecord;
}

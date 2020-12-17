/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelItemRecord } from './ChannelItemRecord';
import type { M2ChannelRecord } from './M2ChannelRecord';

export type M2ChannelContentThread = {
    record: ChannelItemRecord;
    parent: M2ChannelRecord;
}

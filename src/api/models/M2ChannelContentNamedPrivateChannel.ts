/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';

export type M2ChannelContentNamedPrivateChannel = {
    name: string;
    notificationDefaults?: ChannelSpecificDefaults | null;
    canHaveThreads: boolean;
}

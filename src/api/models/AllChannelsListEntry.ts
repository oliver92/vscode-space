/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { M2_Access } from './M2_Access';

export type AllChannelsListEntry = {
    channelId: string;
    name: string;
    description: string;
    access: M2_Access;
    icon?: string | null;
    created: string;
    subscribers: number;
    subscribed: boolean;
}

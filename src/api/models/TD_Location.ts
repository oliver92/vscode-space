/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ATimeZoneWithOffset } from './ATimeZoneWithOffset';

export type TD_Location = {
    id: string;
    name: string;
    timezone?: ATimeZoneWithOffset | null;
    tz?: string | null;
    workdays?: Array<number> | null;
    phones: Array<string>;
    emails: Array<string>;
    equipment?: Array<string> | null;
    description?: string | null;
    address?: string | null;
    parent?: TD_Location | null;
    type: string;
    mapId?: string | null;
    capacity?: number | null;
    channelId?: string | null;
    archived: boolean;
}

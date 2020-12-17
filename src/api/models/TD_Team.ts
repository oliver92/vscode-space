/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CFValue } from './CFValue';
import type { TD_Membership } from './TD_Membership';

export type TD_Team = {
    id: string;
    name: string;
    description: string;
    parent?: TD_Team | null;
    emails?: Array<string> | null;
    channelId?: string | null;
    archived: boolean;
    disbanded?: boolean | null;
    disbandedAt?: string | null;
    externalId?: string | null;
    memberships: Array<TD_Membership>;
    customFields: Record<string, CFValue>;
}

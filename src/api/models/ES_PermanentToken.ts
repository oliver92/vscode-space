/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRecord } from './AccessRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type ES_PermanentToken = {
    id: string;
    name: string;
    profile: TD_MemberProfile;
    scope: string;
    created: string;
    lastAccess?: AccessRecord | null;
}

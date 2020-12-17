/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRecord } from './AccessRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type ES_ApplicationPassword = {
    id: string;
    profile: TD_MemberProfile;
    name: string;
    scope: string;
    created: string;
    lastAccess?: AccessRecord | null;
}

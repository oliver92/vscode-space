/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRecord } from './AccessRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type ES_AuthenticationSession = {
    id: string;
    profile: TD_MemberProfile;
    created: string;
    expires: string;
    lastAccess?: AccessRecord | null;
    current: boolean;
}

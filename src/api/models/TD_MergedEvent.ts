/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Membership } from './TD_Membership';

export type TD_MergedEvent = {
    events: Array<{
        first: TD_Membership,
        second: number,
    }>;
    profile: TD_MemberProfile;
}

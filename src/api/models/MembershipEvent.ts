/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Membership } from './TD_Membership';

export type MembershipEvent = {
    profile: TD_MemberProfile;
    membership: Array<TD_Membership>;
}

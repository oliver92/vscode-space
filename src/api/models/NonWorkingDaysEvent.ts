/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NonWorkingDays } from './NonWorkingDays';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type NonWorkingDaysEvent = {
    profile: TD_MemberProfile;
    days: Array<NonWorkingDays>;
}

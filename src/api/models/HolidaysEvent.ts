/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicHoliday } from './PublicHoliday';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type HolidaysEvent = {
    profile: TD_MemberProfile;
    holidays: Array<PublicHoliday>;
}

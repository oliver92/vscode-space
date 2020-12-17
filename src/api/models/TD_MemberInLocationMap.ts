/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_LocationMapPoint } from './TD_LocationMapPoint';
import type { TD_MemberLocation } from './TD_MemberLocation';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type TD_MemberInLocationMap = {
    profile: TD_MemberProfile;
    memberLocation: TD_MemberLocation;
    locationMapPoint?: TD_LocationMapPoint | null;
}

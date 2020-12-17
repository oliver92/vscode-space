/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_Location } from './TD_Location';
import type { TD_LocationMapPoint } from './TD_LocationMapPoint';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type TD_MemberLocation = {
    id: string;
    location: TD_Location;
    locationMapPoints?: Array<TD_LocationMapPoint> | null;
    since?: string | null;
    till?: string | null;
    member: TD_MemberProfile;
    archived: boolean;
}

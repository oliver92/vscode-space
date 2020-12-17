/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbsenceRecord } from './AbsenceRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type M2AbsenceItemApproveDeletedContent = {
    absence: AbsenceRecord;
    by: TD_MemberProfile;
    approve: boolean;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbsenceRecord } from './AbsenceRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type M2AbsenceItemDeletedContent = {
    absence: AbsenceRecord;
    by?: TD_MemberProfile | null;
}

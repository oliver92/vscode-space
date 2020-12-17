/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbsenceReasonRecord } from './AbsenceReasonRecord';
import type { AbsenceRecord } from './AbsenceRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type M2AbsenceItemUpdatedContent = {
    absence: AbsenceRecord;
    reason?: {
        old: AbsenceReasonRecord,
        new: AbsenceReasonRecord,
    } | null;
    description?: {
        old: string,
        new: string,
    } | null;
    since?: {
        old: string,
        new: string,
    } | null;
    till?: {
        old: string,
        new: string,
    } | null;
    by?: TD_MemberProfile | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbsenceApproval } from './AbsenceApproval';
import type { AbsenceReasonRecord } from './AbsenceReasonRecord';
import type { CFValue } from './CFValue';
import type { TD_Location } from './TD_Location';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type AbsenceRecord = {
    id: string;
    archived: boolean;
    member: TD_MemberProfile;
    icon: string;
    reason?: AbsenceReasonRecord | null;
    description?: string | null;
    since: string;
    till: string;
    location?: TD_Location | null;
    available: boolean;
    approval?: AbsenceApproval | null;
    customFields: Record<string, CFValue>;
}

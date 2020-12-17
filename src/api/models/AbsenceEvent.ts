/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbsenceRecord } from './AbsenceRecord';
import type { TD_MemberWithTeam } from './TD_MemberWithTeam';

export type AbsenceEvent = {
    profile: TD_MemberWithTeam;
    events: Array<AbsenceRecord>;
}

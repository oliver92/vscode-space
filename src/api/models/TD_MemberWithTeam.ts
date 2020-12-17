/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Team } from './TD_Team';

export type TD_MemberWithTeam = {
    profile: TD_MemberProfile;
    teams: Array<TD_Team>;
}

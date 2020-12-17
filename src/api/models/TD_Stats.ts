/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_Location } from './TD_Location';
import type { TD_Role } from './TD_Role';
import type { TD_Team } from './TD_Team';

export type TD_Stats = {
    totalMembers: number;
    teams: Array<{
        first: TD_Team,
        second: number,
    }>;
    roles: Array<{
        first: TD_Role,
        second: number,
    }>;
    locations: Array<{
        first: TD_Location,
        second: number,
    }>;
}

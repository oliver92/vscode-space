/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PR_Project } from './PR_Project';
import type { TD_Location } from './TD_Location';
import type { TD_Team } from './TD_Team';

export type BG_Stats = {
    totalBlogs: number;
    teams: Array<{
        first: TD_Team,
        second: number,
    }>;
    projects?: Array<{
        first: PR_Project,
        second: number,
    }> | null;
    locations: Array<{
        first: TD_Location,
        second: number,
    }>;
}

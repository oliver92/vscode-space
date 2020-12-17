/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalEntityInfoRecord } from './ExternalEntityInfoRecord';
import type { MeetingRecord } from './MeetingRecord';
import type { PR_Project } from './PR_Project';
import type { TD_Location } from './TD_Location';
import type { TD_Team } from './TD_Team';

export type ArticleDetailsRecord = {
    id: string;
    archived: boolean;
    event?: MeetingRecord | null;
    team?: TD_Team | null;
    project?: PR_Project | null;
    location?: TD_Location | null;
    teams?: Array<TD_Team> | null;
    locations?: Array<TD_Location> | null;
    externalEntityInfo?: ExternalEntityInfoRecord | null;
}

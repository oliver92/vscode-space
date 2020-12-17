/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleRecord } from './ArticleRecord';
import type { CalendarEvent } from './CalendarEvent';
import type { TD_Location } from './TD_Location';
import type { TD_Team } from './TD_Team';

export type BlogPublicationDetails = {
    teamId?: TD_Team | null;
    teams?: Array<TD_Team> | null;
    locationId?: TD_Location | null;
    locations?: Array<TD_Location> | null;
    event?: CalendarEvent | null;
    article?: ArticleRecord | null;
}

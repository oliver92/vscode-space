/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_Location } from './TD_Location';

export type PublicHolidayCalendarRecord = {
    id: string;
    archived: boolean;
    name: string;
    firstDate?: string | null;
    lastDate?: string | null;
    eventsCount: number;
    location: TD_Location;
}

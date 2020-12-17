/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ATimeZone } from './ATimeZone';
import type { TD_Location } from './TD_Location';

export type CalendarEvent = {
    calendarEvent?: boolean | null;
    starts?: string | null;
    ends?: string | null;
    timezone?: ATimeZone | null;
    rooms?: Array<TD_Location> | null;
    allDay?: boolean | null;
}

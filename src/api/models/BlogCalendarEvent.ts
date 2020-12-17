/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ATimeZone } from './ATimeZone';

export type BlogCalendarEvent = {
    starts?: string | null;
    ends?: string | null;
    timezone?: ATimeZone | null;
    rooms?: Array<string> | null;
    allDay?: boolean | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicHolidayCalendarRecord } from './PublicHolidayCalendarRecord';

export type PublicHoliday = {
    id: string;
    calendar: PublicHolidayCalendarRecord;
    name: string;
    date: string;
    workingDay: boolean;
    halfDay?: boolean | null;
}

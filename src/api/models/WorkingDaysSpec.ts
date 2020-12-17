/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ATimeZone } from './ATimeZone';
import type { WeekDayTimeInterval } from './WeekDayTimeInterval';
import type { Workday } from './Workday';

export type WorkingDaysSpec = {
    days: Array<Workday>;
    workingHours?: Array<WeekDayTimeInterval> | null;
    notificationHours?: Array<WeekDayTimeInterval> | null;
    timezone?: ATimeZone | null;
}

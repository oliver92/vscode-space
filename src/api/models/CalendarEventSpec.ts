/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ATimeZone } from './ATimeZone';
import type { BusyStatus } from './BusyStatus';
import type { RecurrenceRule } from './RecurrenceRule';

export type CalendarEventSpec = {
    start: string;
    end: string;
    recurrenceRule?: RecurrenceRule | null;
    allDay: boolean;
    timezone: ATimeZone;
    parentId?: string | null;
    initialMeetingStart?: string | null;
    busyStatus?: BusyStatus | null;
    nextChainId?: string | null;
}

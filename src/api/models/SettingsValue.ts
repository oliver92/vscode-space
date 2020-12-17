/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DraftDocumentType } from './DraftDocumentType';
import type { TD_ProfileEmail } from './TD_ProfileEmail';
import type { Weekday } from './Weekday';

export type SettingsValue = {
    emailNotificationsEnabled: boolean;
    firstDayOfWeek: Weekday;
    themeName?: string | null;
    calendarView?: string | null;
    notificationEmail?: TD_ProfileEmail | null;
    draftType?: DraftDocumentType | null;
    todoFilters?: boolean | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleRecord } from './ArticleRecord';
import type { ATimeZone } from './ATimeZone';
import type { Participant } from './Participant';
import type { TD_Location } from './TD_Location';

export type MeetingRecord = {
    id: string;
    archived: boolean;
    starts: string;
    finishes: string;
    timezone?: ATimeZone | null;
    allDay: boolean;
    rooms: Array<TD_Location>;
    participants: Array<Participant>;
    article?: ArticleRecord | null;
}

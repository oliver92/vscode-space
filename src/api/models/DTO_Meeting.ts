/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalendarEventSpec } from './CalendarEventSpec';
import type { MeetingAttachment } from './MeetingAttachment';
import type { MeetingJoiningPreference } from './MeetingJoiningPreference';
import type { MeetingModificationPreference } from './MeetingModificationPreference';
import type { MeetingOrganizer } from './MeetingOrganizer';
import type { MeetingOrigin } from './MeetingOrigin';
import type { MeetingVisibility } from './MeetingVisibility';
import type { TD_Location } from './TD_Location';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Team } from './TD_Team';

export type DTO_Meeting = {
    id: string;
    archived: boolean;
    summary: string;
    description?: string | null;
    locations: Array<TD_Location>;
    profiles: Array<TD_MemberProfile>;
    teams: Array<TD_Team>;
    occurrenceRule: CalendarEventSpec;
    origin: MeetingOrigin;
    conferenceLink?: string | null;
    visibility: MeetingVisibility;
    modificationPreference: MeetingModificationPreference;
    joiningPreference?: MeetingJoiningPreference | null;
    organizer?: MeetingOrganizer | null;
    etag: number;
    privateDataSubstituted: boolean;
    canModify: boolean;
    canDelete: boolean;
    canJoin: boolean;
    externalParticipants: Array<string>;
    linkToExternalSource?: string | null;
    eventAttachments?: Array<MeetingAttachment> | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeetingOrganizer_Application } from './MeetingOrganizer_Application';
import type { MeetingOrganizer_ExternalUser } from './MeetingOrganizer_ExternalUser';
import type { MeetingOrganizer_HiddenUser } from './MeetingOrganizer_HiddenUser';
import type { MeetingOrganizer_User } from './MeetingOrganizer_User';

export type MeetingOrganizer = (MeetingOrganizer_User | MeetingOrganizer_ExternalUser | MeetingOrganizer_Application | MeetingOrganizer_HiddenUser);

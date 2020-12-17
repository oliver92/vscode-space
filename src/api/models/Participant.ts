/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventParticipationStatus } from './EventParticipationStatus';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type Participant = {
    user: TD_MemberProfile;
    status: EventParticipationStatus;
}

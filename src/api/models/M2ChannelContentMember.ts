/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { ProfileAbsencesRecord } from './ProfileAbsencesRecord';
import type { ProfileMembershipRecord } from './ProfileMembershipRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type M2ChannelContentMember = {
    member: TD_MemberProfile;
    notificationDefaults: ChannelSpecificDefaults;
    memberAbsences?: ProfileAbsencesRecord | null;
    memberTeams?: ProfileMembershipRecord | null;
}

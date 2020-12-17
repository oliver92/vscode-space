/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbsenceRecord } from './AbsenceRecord';
import type { AvatarCropSquare } from './AvatarCropSquare';
import type { CFValue } from './CFValue';
import type { DocumentFolderRecord } from './DocumentFolderRecord';
import type { ES_ProfileLogin } from './ES_ProfileLogin';
import type { Gender } from './Gender';
import type { PublicHoliday } from './PublicHoliday';
import type { TD_MemberLocation } from './TD_MemberLocation';
import type { TD_Membership } from './TD_Membership';
import type { TD_ProfileEmail } from './TD_ProfileEmail';
import type { TD_ProfileLanguage } from './TD_ProfileLanguage';
import type { TD_ProfileName } from './TD_ProfileName';

export type TD_MemberProfile = {
    id: string;
    username: string;
    name: TD_ProfileName;
    speaksEnglish: boolean;
    smallAvatar?: string | null;
    avatar?: string | null;
    profilePicture?: string | null;
    languages: Array<TD_ProfileLanguage>;
    archived: boolean;
    notAMember: boolean;
    joined?: string | null;
    left?: string | null;
    leftAt?: string | null;
    logins: Array<ES_ProfileLogin>;
    about?: string | null;
    avatarCropSquare?: AvatarCropSquare | null;
    gender?: Gender | null;
    birthday?: string | null;
    absences: Array<AbsenceRecord>;
    membershipHistory: Array<TD_Membership>;
    memberships: Array<TD_Membership>;
    folder: DocumentFolderRecord;
    locations: Array<TD_MemberLocation>;
    managers: Array<TD_MemberProfile>;
    onboardingRequired: boolean;
    showBannerOnLandingPage?: boolean | null;
    showBannerOnProjectPage?: boolean | null;
    showBannerOnTeamDirectoryHomePage?: boolean | null;
    holidays: Array<PublicHoliday>;
    emails: Array<TD_ProfileEmail>;
    phones: Array<string>;
    messengers: Array<string>;
    links: Array<string>;
    customFields: Record<string, CFValue>;
}

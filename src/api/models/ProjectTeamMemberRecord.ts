/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PR_Project } from './PR_Project';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Role } from './TD_Role';

export type ProjectTeamMemberRecord = {
    id: string;
    project: PR_Project;
    profile: TD_MemberProfile;
    position?: TD_Role | null;
    since: string;
    archived: boolean;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardRecord } from './BoardRecord';
import type { PR_RepositoryInfo } from './PR_RepositoryInfo';
import type { ProjectIssueTrackerItem } from './ProjectIssueTrackerItem';
import type { ProjectKey } from './ProjectKey';
import type { ProjectPackageRepository } from './ProjectPackageRepository';
import type { ProjectTeamMemberRecord } from './ProjectTeamMemberRecord';
import type { ProjectTeamType } from './ProjectTeamType';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Team } from './TD_Team';

export type PR_Project = {
    id: string;
    key: ProjectKey;
    name: string;
    private: boolean;
    description?: string | null;
    icon?: string | null;
    latestRepositoryActivity?: string | null;
    archived: boolean;
    repos: Array<PR_RepositoryInfo>;
    collaboratorsProfiles: Array<TD_MemberProfile>;
    collaboratorsTeams: Array<TD_Team>;
    packages: Array<ProjectPackageRepository>;
    tags: Array<string>;
    memberProfiles: Array<TD_MemberProfile>;
    memberTeams: Array<TD_Team>;
    adminProfiles: Array<TD_MemberProfile>;
    adminTeams: Array<TD_Team>;
    trackers: Array<ProjectIssueTrackerItem>;
    type: ProjectTeamType;
    teams?: Array<TD_Team> | null;
    members?: Array<ProjectTeamMemberRecord> | null;
    team?: TD_Team | null;
    boards: Array<BoardRecord>;
}

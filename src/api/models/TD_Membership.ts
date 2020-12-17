/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CFValue } from './CFValue';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Role } from './TD_Role';
import type { TD_Team } from './TD_Team';

export type TD_Membership = {
    id: string;
    member?: TD_MemberProfile | null;
    team: TD_Team;
    role: TD_Role;
    lead: boolean;
    manager?: TD_MemberProfile | null;
    since?: string | null;
    till?: string | null;
    activeSince?: string | null;
    activeTill?: string | null;
    requiresApproval: boolean;
    archived: boolean;
    editFor?: TD_Membership | null;
    pendingEdit?: TD_Membership | null;
    approver?: TD_MemberProfile | null;
    customFields: Record<string, CFValue>;
}

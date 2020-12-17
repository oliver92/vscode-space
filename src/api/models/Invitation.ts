/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Role } from './TD_Role';
import type { TD_Team } from './TD_Team';

export type Invitation = {
    id: string;
    expiresAt: string;
    inviteeEmail: string;
    inviteeEmailBlocked: boolean;
    inviteeEmailBlockedReason?: string | null;
    inviteeFirstName?: string | null;
    inviteeLastName?: string | null;
    invitee?: TD_MemberProfile | null;
    inviter: CPrincipal;
    team?: TD_Team | null;
    role?: TD_Role | null;
    revoked?: boolean | null;
}

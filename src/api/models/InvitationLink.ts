/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';

export type InvitationLink = {
    id: string;
    name: string;
    createdBy: CPrincipal;
    createdAt: string;
    expiresAt?: string | null;
    inviteeLimit: number;
    inviteeUsage: number;
    deleted: boolean;
}

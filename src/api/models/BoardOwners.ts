/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardMemberOwners } from './BoardMemberOwners';
import type { BoardTeamOwners } from './BoardTeamOwners';

export type BoardOwners = {
    members: BoardMemberOwners;
    teams: BoardTeamOwners;
}

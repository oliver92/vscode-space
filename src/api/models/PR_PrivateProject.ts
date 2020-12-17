/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectKey } from './ProjectKey';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type PR_PrivateProject = {
    key: ProjectKey;
    name: string;
    accessAllowed: boolean;
    admins: Array<TD_MemberProfile>;
}

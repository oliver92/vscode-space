/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';

export type VoteGroup = {
    variantName: string;
    count: number;
    meVote: boolean;
    lastUsers: Array<TD_MemberProfile>;
    owner?: TD_MemberProfile | null;
}

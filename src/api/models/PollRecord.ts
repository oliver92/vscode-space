/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';
import type { VoteGroup } from './VoteGroup';

export type PollRecord = {
    id: string;
    owner: TD_MemberProfile;
    question: string;
    meVote: boolean;
    countPeople: number;
    anonymous: boolean;
    closed: boolean;
    extendable: boolean;
    multiChoice: boolean;
    ended: boolean;
    expirationTime?: string | null;
    votes: Array<VoteGroup>;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';

export type RepositoryCommitRecord = {
    id: string;
    repositoryId: string;
    repositoryName: string;
    revision: string;
    message?: string | null;
    date: string;
    authorName?: string | null;
    authorEmail?: string | null;
    committerName?: string | null;
    committerEmail?: string | null;
    authorProfile?: TD_MemberProfile | null;
}

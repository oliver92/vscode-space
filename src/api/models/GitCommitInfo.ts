/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitAuthorInfo } from './GitAuthorInfo';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type GitCommitInfo = {
    id: string;
    message: string;
    authorDate: number;
    commitDate: number;
    author: GitAuthorInfo;
    committer: GitAuthorInfo;
    authorProfile?: TD_MemberProfile | null;
    parents: Array<string>;
    heads: Array<string>;
}

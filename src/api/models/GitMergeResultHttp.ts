/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitMergeStatusHttp } from './GitMergeStatusHttp';

export type GitMergeResultHttp = {
    status: GitMergeStatusHttp;
    resultCommitId?: string | null;
}

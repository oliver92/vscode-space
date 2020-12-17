/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RepositoryActivity } from './RepositoryActivity';
import type { RepositoryState } from './RepositoryState';

export type PR_RepositoryInfo = {
    id?: string | null;
    name: string;
    description: string;
    latestActivity?: string | null;
    proxyPushNotification?: string | null;
    state: RepositoryState;
    initProgress?: string | null;
    readmeName?: string | null;
    monthlyActivity?: RepositoryActivity | null;
}

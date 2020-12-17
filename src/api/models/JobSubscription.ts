/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobSubscriptionState } from './JobSubscriptionState';
import type { PR_Project } from './PR_Project';

export type JobSubscription = {
    id: string;
    jobId: string;
    project: PR_Project;
    state: JobSubscriptionState;
    archived: boolean;
}

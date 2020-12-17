/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobSubscriptionType } from './JobSubscriptionType';

export type JobSubscriptionState = {
    type: JobSubscriptionType;
    containsMyCommit: boolean;
    runByMe: boolean;
}

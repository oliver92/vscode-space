/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { JobSubscription } from './JobSubscription';

export type M2ChannelAutomationJobFeedInfo = {
    jobSubscription: JobSubscription;
    jobName: string;
    repoName?: string | null;
    notificationDefaults: ChannelSpecificDefaults;
}

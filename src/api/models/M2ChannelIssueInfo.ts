/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { Issue } from './Issue';
import type { ProjectKey } from './ProjectKey';

export type M2ChannelIssueInfo = {
    projectKey?: ProjectKey | null;
    issue: Issue;
    notificationDefaults: ChannelSpecificDefaults;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Issue } from './Issue';
import type { MessageLink } from './MessageLink';

export type IssueCreatedDetails = {
    issue?: Issue | null;
    originMessage?: MessageLink | null;
}

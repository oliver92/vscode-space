/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutomationJobExecutionUnfurlDetails } from './AutomationJobExecutionUnfurlDetails';
import type { AutomationJobUnfurlDetails } from './AutomationJobUnfurlDetails';
import type { ChannelItemSnapshot } from './ChannelItemSnapshot';
import type { UnfurlDetailsArticle } from './UnfurlDetailsArticle';
import type { UnfurlDetailsChecklist } from './UnfurlDetailsChecklist';
import type { UnfurlDetailsCodeSnippet } from './UnfurlDetailsCodeSnippet';
import type { UnfurlDetailsDateTime } from './UnfurlDetailsDateTime';
import type { UnfurlDetailsDateTimeRange } from './UnfurlDetailsDateTimeRange';
import type { UnfurlDetailsDraft } from './UnfurlDetailsDraft';
import type { UnfurlDetailsIssue } from './UnfurlDetailsIssue';
import type { UnfurlDetailsIssueStatus } from './UnfurlDetailsIssueStatus';
import type { UnfurlDetailsIssueTag } from './UnfurlDetailsIssueTag';
import type { UnfurlDetailsLocation } from './UnfurlDetailsLocation';
import type { UnfurlDetailsMC } from './UnfurlDetailsMC';
import type { UnfurlDetailsMeeting } from './UnfurlDetailsMeeting';
import type { UnfurlDetailsProfile } from './UnfurlDetailsProfile';
import type { UnfurlDetailsSprint } from './UnfurlDetailsSprint';
import type { UnfurlDetailsTeam } from './UnfurlDetailsTeam';

export type UnfurlDetails = (UnfurlDetailsLocation | UnfurlDetailsArticle | UnfurlDetailsIssue | UnfurlDetailsMC | UnfurlDetailsProfile | UnfurlDetailsCodeSnippet | ChannelItemSnapshot | AutomationJobUnfurlDetails | UnfurlDetailsSprint | UnfurlDetailsIssueStatus | UnfurlDetailsTeam | UnfurlDetailsDateTimeRange | UnfurlDetailsDateTime | UnfurlDetailsDraft | UnfurlDetailsChecklist | AutomationJobExecutionUnfurlDetails | UnfurlDetailsMeeting | UnfurlDetailsIssueTag);

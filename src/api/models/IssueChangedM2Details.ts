/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueAssigneeChangedDetails } from './IssueAssigneeChangedDetails';
import type { IssueAttachmentsChangedDetails } from './IssueAttachmentsChangedDetails';
import type { IssueChecklistsChangedDetails } from './IssueChecklistsChangedDetails';
import type { IssueCreatedDetails } from './IssueCreatedDetails';
import type { IssueDeletedDetails } from './IssueDeletedDetails';
import type { IssueDescriptionChangedDetails } from './IssueDescriptionChangedDetails';
import type { IssueDueDateChangedDetails } from './IssueDueDateChangedDetails';
import type { IssueMCExtension } from './IssueMCExtension';
import type { IssueStatusChangedDetails } from './IssueStatusChangedDetails';
import type { IssueTagsChangedDetails } from './IssueTagsChangedDetails';
import type { IssueTitleChangedDetails } from './IssueTitleChangedDetails';

export type IssueChangedM2Details = (IssueDeletedDetails | IssueDescriptionChangedDetails | IssueAssigneeChangedDetails | IssueStatusChangedDetails | IssueTitleChangedDetails | IssueDueDateChangedDetails | IssueCreatedDetails | IssueTagsChangedDetails | IssueMCExtension | IssueChecklistsChangedDetails | IssueAttachmentsChangedDetails);

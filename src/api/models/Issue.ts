/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentInfo } from './AttachmentInfo';
import type { Checklist } from './Checklist';
import type { CPrincipal } from './CPrincipal';
import type { ExternalEntityInfoRecord } from './ExternalEntityInfoRecord';
import type { ImportedEntityInfo } from './ImportedEntityInfo';
import type { IssueStatus } from './IssueStatus';
import type { IssueTracker } from './IssueTracker';
import type { M2ChannelRecord } from './M2ChannelRecord';
import type { PlanningTag } from './PlanningTag';
import type { PR_Project } from './PR_Project';
import type { SprintRecord } from './SprintRecord';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type Issue = {
    id: string;
    archived: boolean;
    projectId: string;
    projectRef?: PR_Project | null;
    trackerRef?: IssueTracker | null;
    number: number;
    createdBy: CPrincipal;
    creationTime: string;
    assignee?: TD_MemberProfile | null;
    status: IssueStatus;
    dueDate?: string | null;
    importInfo?: ImportedEntityInfo | null;
    externalEntityInfo?: ExternalEntityInfoRecord | null;
    tags: Array<PlanningTag>;
    title: string;
    attachmentsCount?: number | null;
    description?: string | null;
    channel: M2ChannelRecord;
    attachments: Array<AttachmentInfo>;
    checklists: Array<Checklist>;
    sprints: Array<SprintRecord>;
}

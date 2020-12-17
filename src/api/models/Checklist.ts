/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanItem } from './PlanItem';
import type { PlanningTag } from './PlanningTag';
import type { PR_Project } from './PR_Project';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type Checklist = {
    id: string;
    archived: boolean;
    projectId?: string | null;
    project?: PR_Project | null;
    owner?: TD_MemberProfile | null;
    name: string;
    root?: PlanItem | null;
    rootTag?: PlanningTag | null;
    description?: string | null;
    totalItemsCount: number;
    doneItemsCount: number;
    updatedTime?: string | null;
}

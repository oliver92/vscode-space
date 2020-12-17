/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Issue } from './Issue';
import type { PlanningTag } from './PlanningTag';

export type PlanItem = {
    id: string;
    checklistId: string;
    tag?: PlanningTag | null;
    simpleText?: string | null;
    simpleDone?: boolean | null;
    issue?: Issue | null;
    issueProblem?: string | null;
    canEditIssue?: boolean | null;
    hasChildren: boolean;
    children: Array<PlanItem>;
}

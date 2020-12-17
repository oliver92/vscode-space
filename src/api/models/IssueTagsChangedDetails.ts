/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanningTag } from './PlanningTag';

export type IssueTagsChangedDetails = {
    addedTags?: Array<PlanningTag> | null;
    removedTags?: Array<PlanningTag> | null;
}

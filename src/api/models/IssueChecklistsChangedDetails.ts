/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Checklist } from './Checklist';

export type IssueChecklistsChangedDetails = {
    addedChecklists?: Array<Checklist> | null;
    removedChecklists?: Array<Checklist> | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignedPerson } from './AssignedPerson';

export type ResponsibilityRecord = {
    responsibilityId: string;
    summary: string;
    notes?: string | null;
    assignedPeople: Array<AssignedPerson>;
}

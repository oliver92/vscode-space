/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsibilityRecord } from './ResponsibilityRecord';

export type SubjectResponsibilitiesTable = {
    subjectId: string;
    name?: string | null;
    reusedInProjects: Array<string>;
    responsibilityRecords: Array<ResponsibilityRecord>;
}

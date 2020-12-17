/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkingDaysSpec } from './WorkingDaysSpec';

export type TD_WorkingDays = {
    id: string;
    dateStart?: string | null;
    dateEnd?: string | null;
    workingDaysSpec: WorkingDaysSpec;
}

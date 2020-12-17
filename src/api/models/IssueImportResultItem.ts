/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Issue } from './Issue';

export type IssueImportResultItem = {
    externalId?: string | null;
    issue?: Issue | null;
    error?: string | null;
}

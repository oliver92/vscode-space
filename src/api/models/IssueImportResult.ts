/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueImportResultItem } from './IssueImportResultItem';

export type IssueImportResult = {
    message: string;
    created?: Array<IssueImportResultItem> | null;
    updated?: Array<IssueImportResultItem> | null;
    skipped?: Array<IssueImportResultItem> | null;
    missingAttributes?: Array<string> | null;
}

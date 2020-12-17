/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleRecord } from './ArticleRecord';

export type ArticleImportResult = {
    externalId?: string | null;
    article?: ArticleRecord | null;
    error?: string | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportTransactionRecord } from './ImportTransactionRecord';

export type ExternalEntityInfoRecord = {
    id: string;
    archived: boolean;
    externalId?: string | null;
    externalName?: string | null;
    externalUrl?: string | null;
    transaction: ImportTransactionRecord;
}

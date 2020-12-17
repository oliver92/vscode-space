/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';

export type ImportTransactionRecord = {
    id: string;
    archived: boolean;
    importer: CPrincipal;
    externalSource: string;
    imported: string;
}

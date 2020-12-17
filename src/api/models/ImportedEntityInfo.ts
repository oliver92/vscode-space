/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportSource } from './ImportSource';

export type ImportedEntityInfo = {
    source: ImportSource;
    externalName?: string | null;
    externalUrl?: string | null;
}

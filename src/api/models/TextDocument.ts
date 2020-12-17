/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DraftDocumentType } from './DraftDocumentType';

export type TextDocument = {
    id: string;
    resetCounter: number;
    version?: number | null;
    type: DraftDocumentType;
    text: string;
    model?: string | null;
}

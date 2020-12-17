/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentIn } from './AttachmentIn';

export type MessageForImport = {
    authorPrincipalId: string;
    text: string;
    createdAtUtc: number;
    attachments?: Array<AttachmentIn> | null;
}

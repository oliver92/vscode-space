/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';

export type NewMessage = {
    text: string;
    temporaryId: string;
    attachments?: Array<Attachment> | null;
    pending: boolean;
    draftTag?: string | null;
}

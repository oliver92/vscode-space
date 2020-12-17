/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';

export type EditMessage = {
    text: string;
    id: string;
    attachments?: Array<Attachment> | null;
}

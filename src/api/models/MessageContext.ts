/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { ChatMessage } from './ChatMessage';

export type MessageContext = {
    messageId: string;
    channelId: string;
    messageData?: string | null;
    body?: ChatMessage | null;
    attachments?: Array<Attachment> | null;
    externalId?: string | null;
    createdTime: string;
}

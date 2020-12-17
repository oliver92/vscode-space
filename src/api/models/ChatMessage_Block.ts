/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageOutline } from './MessageOutline';
import type { MessageSectionElement } from './MessageSectionElement';
import type { MessageStyle } from './MessageStyle';

export type ChatMessage_Block = {
    style?: MessageStyle | null;
    outline?: MessageOutline | null;
    sections: Array<MessageSectionElement>;
    messageData?: string | null;
}

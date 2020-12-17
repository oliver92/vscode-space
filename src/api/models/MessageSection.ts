/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageElement } from './MessageElement';

export type MessageSection = {
    header?: string | null;
    elements: Array<MessageElement>;
    footer?: string | null;
}

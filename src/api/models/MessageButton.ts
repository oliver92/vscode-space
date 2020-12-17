/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageAction } from './MessageAction';
import type { MessageButtonStyle } from './MessageButtonStyle';

export type MessageButton = {
    text: string;
    style: MessageButtonStyle;
    action: MessageAction;
    disabled?: boolean | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatMessage_Block } from './ChatMessage_Block';
import type { ChatMessage_Text } from './ChatMessage_Text';

export type ChatMessage = (ChatMessage_Text | ChatMessage_Block);

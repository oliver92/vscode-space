/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageControlGroup } from './MessageControlGroup';
import type { MessageDivider } from './MessageDivider';
import type { MessageFields } from './MessageFields';
import type { MessageText } from './MessageText';

export type MessageElement = (MessageFields | MessageControlGroup | MessageDivider | MessageText);

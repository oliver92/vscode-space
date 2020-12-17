/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteMessage } from './DeleteMessage';
import type { EditMessage } from './EditMessage';
import type { NewMessage } from './NewMessage';
import type { PublishMessage } from './PublishMessage';

export type ChatModification = (NewMessage | EditMessage | DeleteMessage | PublishMessage);

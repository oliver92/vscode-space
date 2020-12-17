/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatMessageIdentifier_ExternalId } from './ChatMessageIdentifier_ExternalId';
import type { ChatMessageIdentifier_InternalId } from './ChatMessageIdentifier_InternalId';

export type ChatMessageIdentifier = (ChatMessageIdentifier_InternalId | ChatMessageIdentifier_ExternalId);

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatChannel_FromId } from './ChatChannel_FromId';
import type { ChatChannel_FromName } from './ChatChannel_FromName';

export type ChatChannel = (ChatChannel_FromId | ChatChannel_FromName);

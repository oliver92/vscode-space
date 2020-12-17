/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { M2EmailNotificationType } from './M2EmailNotificationType';
import type { NotificationFilter } from './NotificationFilter';

export type ChannelSpecificDefaults = {
    filter: NotificationFilter;
    push: boolean;
    email: M2EmailNotificationType;
    threadsSubscribed?: boolean | null;
}

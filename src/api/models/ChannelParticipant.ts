/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';

export type ChannelParticipant = {
    principal: CPrincipal;
    messageCount: number;
    pendingMessageCount?: number | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageContext } from './MessageContext';

export type MessagePayload = {
    message: MessageContext;
    accessToken?: string | null;
    verificationToken?: string | null;
    userId: string;
}

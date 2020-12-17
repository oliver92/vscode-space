/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';

export type MessageInfo = {
    id: string;
    text: string;
    time: number;
    author: CPrincipal;
    attachments?: string | null;
    inThirdPerson?: boolean | null;
}

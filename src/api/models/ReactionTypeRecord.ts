/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { ReactionData } from './ReactionData';

export type ReactionTypeRecord = {
    id: string;
    archived: boolean;
    data: ReactionData;
    provider: CPrincipal;
    addedAt: string;
    order?: number | null;
}

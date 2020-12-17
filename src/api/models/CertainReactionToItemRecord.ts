/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { ReactionTypeRecord } from './ReactionTypeRecord';

export type CertainReactionToItemRecord = {
    id: string;
    itemId: string;
    reaction: ReactionTypeRecord;
    count: number;
    meReacted: boolean;
    principals: Array<CPrincipal>;
    order?: number | null;
}

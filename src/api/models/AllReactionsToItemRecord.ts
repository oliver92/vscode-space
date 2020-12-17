/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertainReactionToItemRecord } from './CertainReactionToItemRecord';
import type { EmojiReactionRecord } from './EmojiReactionRecord';

export type AllReactionsToItemRecord = {
    id: string;
    reactions: Array<CertainReactionToItemRecord>;
    emojiReactions?: Array<EmojiReactionRecord> | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmojiSearchMatchType } from './EmojiSearchMatchType';

export type EmojiSearchMatchData = {
    emoji: string;
    matched?: string | null;
    matchType: EmojiSearchMatchType;
}

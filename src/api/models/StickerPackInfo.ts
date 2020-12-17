/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sticker } from './Sticker';

export type StickerPackInfo = {
    id: string;
    name: string;
    favoriteByDefault: boolean;
    archived: boolean;
    private: boolean;
    stickers: Array<Sticker>;
    pack: StickerPackInfo;
    addedAt?: string | null;
}

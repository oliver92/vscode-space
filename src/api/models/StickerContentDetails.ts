/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sticker } from './Sticker';
import type { StickerPackInfo } from './StickerPackInfo';

export type StickerContentDetails = {
    sticker: Sticker;
    pack?: StickerPackInfo | null;
}

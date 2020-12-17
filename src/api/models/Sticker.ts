/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StickerVariant } from './StickerVariant';

export type Sticker = {
    id: string;
    symbol?: string | null;
    attachmentId?: string | null;
    width?: number | null;
    height?: number | null;
    variants?: Array<StickerVariant> | null;
    animated?: boolean | null;
    archived: boolean;
}

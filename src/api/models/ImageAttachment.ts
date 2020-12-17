/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageAttachmentVariant } from './ImageAttachmentVariant';

export type ImageAttachment = {
    id: string;
    name?: string | null;
    width: number;
    height: number;
    previewBytes?: string | null;
    variants?: Array<ImageAttachmentVariant> | null;
}

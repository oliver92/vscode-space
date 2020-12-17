/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleMarkdownImage } from './ArticleMarkdownImage';

export type ArticlePreviewRecord = {
    id: string;
    archived: boolean;
    previewImages: Array<ArticleMarkdownImage>;
    preview: string;
    wordsNumber?: number | null;
    cut?: boolean | null;
}

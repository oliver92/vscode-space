/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleChannelRecord } from './ArticleChannelRecord';
import type { ArticleDetailsRecord } from './ArticleDetailsRecord';
import type { ArticlePreviewRecord } from './ArticlePreviewRecord';
import type { ArticleRecord } from './ArticleRecord';

export type M2BlogItemPreview = {
    article: ArticleRecord;
    articlePreview: ArticlePreviewRecord;
    articleDetails: ArticleDetailsRecord;
    articleChannel: ArticleChannelRecord;
}

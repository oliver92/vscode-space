/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleChannelRecord } from './ArticleChannelRecord';
import type { ArticleContentRecord } from './ArticleContentRecord';
import type { ArticleDetailsRecord } from './ArticleDetailsRecord';
import type { ArticleRecord } from './ArticleRecord';

export type M2ChannelContentArticle = {
    article: ArticleRecord;
    articleContent: ArticleContentRecord;
    details?: ArticleDetailsRecord | null;
    channel?: ArticleChannelRecord | null;
}

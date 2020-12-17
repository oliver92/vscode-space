/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleChannelRecord } from './ArticleChannelRecord';
import type { ArticleContentRecord } from './ArticleContentRecord';
import type { ArticleDetailsRecord } from './ArticleDetailsRecord';
import type { ArticleRecord } from './ArticleRecord';

export type UnfurlDetailsArticle = {
    article: ArticleRecord;
    content: ArticleContentRecord;
    channel: ArticleChannelRecord;
    details?: ArticleDetailsRecord | null;
}

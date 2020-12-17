/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleChannelRecord } from './ArticleChannelRecord';
import type { ArticleContentRecord } from './ArticleContentRecord';
import type { ArticleDetailsRecord } from './ArticleDetailsRecord';
import type { ArticleRecord } from './ArticleRecord';

export type M2BlogItemContent = {
    article: ArticleRecord;
    articleContent: ArticleContentRecord;
    articleDetails: ArticleDetailsRecord;
    articleChannel: ArticleChannelRecord;
}

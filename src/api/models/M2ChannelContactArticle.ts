/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleRecord } from './ArticleRecord';
import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';

export type M2ChannelContactArticle = {
    article: ArticleRecord;
    notificationDefaults: ChannelSpecificDefaults;
}

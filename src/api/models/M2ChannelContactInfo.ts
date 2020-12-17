/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillingFeedChannel } from './BillingFeedChannel';
import type { M2ChannelAutomationJobFeedInfo } from './M2ChannelAutomationJobFeedInfo';
import type { M2ChannelContactArticle } from './M2ChannelContactArticle';
import type { M2ChannelContactObsolete } from './M2ChannelContactObsolete';
import type { M2ChannelContactQuickInfoDefault } from './M2ChannelContactQuickInfoDefault';
import type { M2ChannelContactThread } from './M2ChannelContactThread';
import type { M2ChannelContentApplication } from './M2ChannelContentApplication';
import type { M2ChannelContentCodeDiscussion } from './M2ChannelContentCodeDiscussion';
import type { M2ChannelContentCodeReviewDiscussion } from './M2ChannelContentCodeReviewDiscussion';
import type { M2ChannelContentCodeReviewFeed } from './M2ChannelContentCodeReviewFeed';
import type { M2ChannelContentLocation } from './M2ChannelContentLocation';
import type { M2ChannelContentMember } from './M2ChannelContentMember';
import type { M2ChannelContentMention } from './M2ChannelContentMention';
import type { M2ChannelContentNamedPrivateChannel } from './M2ChannelContentNamedPrivateChannel';
import type { M2ChannelContentTeam } from './M2ChannelContentTeam';
import type { M2ChannelIssueInfo } from './M2ChannelIssueInfo';
import type { M2PrivateConversationChannelContent } from './M2PrivateConversationChannelContent';
import type { M2SharedChannelContent } from './M2SharedChannelContent';
import type { SpaceNewsFeedChannel } from './SpaceNewsFeedChannel';

export type M2ChannelContactInfo = (BillingFeedChannel | M2ChannelContentMention | M2ChannelContentCodeReviewDiscussion | M2PrivateConversationChannelContent | M2ChannelAutomationJobFeedInfo | M2ChannelContentTeam | M2ChannelIssueInfo | M2ChannelContactObsolete | M2ChannelContentCodeReviewFeed | M2ChannelContentMember | SpaceNewsFeedChannel | M2ChannelContentLocation | M2ChannelContentCodeDiscussion | M2SharedChannelContent | M2ChannelContentNamedPrivateChannel | M2ChannelContentApplication | M2ChannelContactArticle | M2ChannelContactQuickInfoDefault | M2ChannelContactThread);

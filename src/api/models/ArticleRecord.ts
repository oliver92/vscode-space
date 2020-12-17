/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllReactionsToItemRecord } from './AllReactionsToItemRecord';
import type { ArticleMarkdownImage } from './ArticleMarkdownImage';
import type { BG_ArticleAlias } from './BG_ArticleAlias';
import type { ExternalEntityInfoRecord } from './ExternalEntityInfoRecord';
import type { M2ChannelContentRecord } from './M2ChannelContentRecord';
import type { M2ChannelRecord } from './M2ChannelRecord';
import type { MeetingRecord } from './MeetingRecord';
import type { PR_Project } from './PR_Project';
import type { TD_Location } from './TD_Location';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Team } from './TD_Team';

export type ArticleRecord = {
    id: string;
    archived: boolean;
    title: string;
    created: string;
    author: TD_MemberProfile;
    aliases: Array<BG_ArticleAlias>;
    archivedBy?: TD_MemberProfile | null;
    archivedAt?: string | null;
    content: string;
    event?: MeetingRecord | null;
    team?: TD_Team | null;
    project?: PR_Project | null;
    location?: TD_Location | null;
    teams?: Array<TD_Team> | null;
    locations?: Array<TD_Location> | null;
    externalEntityInfo?: ExternalEntityInfoRecord | null;
    previewImages: Array<ArticleMarkdownImage>;
    preview: string;
    wordsNumber?: number | null;
    cut?: boolean | null;
    channel: M2ChannelRecord;
    channelContent: M2ChannelContentRecord;
    reactions: AllReactionsToItemRecord;
    editable: boolean;
}

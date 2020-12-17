/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { DocumentFolderRecord } from './DocumentFolderRecord';
import type { PublicationDetails } from './PublicationDetails';
import type { TD_MemberProfile } from './TD_MemberProfile';
import type { TD_Team } from './TD_Team';
import type { TextDocument } from './TextDocument';

export type DR_Draft = {
    id: string;
    title: string;
    modified: string;
    created?: string | null;
    modifiedBy?: CPrincipal | null;
    shared: boolean;
    deleted?: boolean | null;
    publicationDetails2?: PublicationDetails | null;
    author?: TD_MemberProfile | null;
    publishedFlag: boolean;
    published?: boolean | null;
    folder?: DocumentFolderRecord | null;
    accessOrdinal: number;
    editors: Array<TD_MemberProfile>;
    editorsTeams: Array<TD_Team>;
    document: TextDocument;
}

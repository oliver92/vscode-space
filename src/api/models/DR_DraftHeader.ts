/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { DocumentFolderRecord } from './DocumentFolderRecord';
import type { PublicationDetails } from './PublicationDetails';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type DR_DraftHeader = {
    id: string;
    title: string;
    author: TD_MemberProfile;
    modified: string;
    created?: string | null;
    modifiedBy?: CPrincipal | null;
    shared: boolean;
    publicationDetails2?: PublicationDetails | null;
    deleted?: boolean | null;
    folder?: DocumentFolderRecord | null;
}

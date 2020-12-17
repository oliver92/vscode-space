/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { DR_DraftHeader } from './DR_DraftHeader';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type DocumentFolderRecord = {
    id: string;
    archived: boolean;
    name: string;
    parent?: DocumentFolderRecord | null;
    subfolders: Array<DocumentFolderRecord>;
    documents: Array<DR_DraftHeader>;
    owner: TD_MemberProfile;
    alias: string;
    created?: string | null;
    createdBy?: CPrincipal | null;
    updated?: string | null;
    updatedBy?: CPrincipal | null;
}

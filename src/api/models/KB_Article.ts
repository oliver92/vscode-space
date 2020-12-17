/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { KB_Book } from './KB_Book';
import type { KB_Folder } from './KB_Folder';
import type { PublicationItem } from './PublicationItem';

export type KB_Article = {
    id: string;
    archived: boolean;
    title: string;
    book: KB_Book;
    folder: KB_Folder;
    item: PublicationItem;
    created: string;
    createdBy?: CPrincipal | null;
    updated?: string | null;
    updatedBy?: CPrincipal | null;
    alias: string;
}

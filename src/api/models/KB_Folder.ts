/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { KB_Article } from './KB_Article';
import type { KB_Book } from './KB_Book';

export type KB_Folder = {
    id: string;
    archived: boolean;
    name: string;
    parent?: KB_Folder | null;
    subfolders: Array<KB_Folder>;
    articles: Array<KB_Article>;
    book: KB_Book;
    cover?: KB_Article | null;
    alias: string;
    created?: string | null;
    createdBy?: CPrincipal | null;
    updated?: string | null;
    updatedBy?: CPrincipal | null;
}

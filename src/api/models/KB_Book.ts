/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { KB_BookContext } from './KB_BookContext';
import type { KB_Folder } from './KB_Folder';
import type { TD_Location } from './TD_Location';
import type { TD_Team } from './TD_Team';

export type KB_Book = {
    id: string;
    archived: boolean;
    name: string;
    summary: string;
    updated: number;
    updatedBy?: CPrincipal | null;
    alias: string;
    contexts: Array<KB_BookContext>;
    rootFolder: KB_Folder;
    locations: Array<TD_Location>;
    teams: Array<TD_Team>;
}

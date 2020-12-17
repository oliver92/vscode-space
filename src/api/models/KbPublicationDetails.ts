/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KB_Article } from './KB_Article';
import type { KB_Book } from './KB_Book';
import type { KB_Folder } from './KB_Folder';

export type KbPublicationDetails = {
    book?: KB_Book | null;
    folder?: KB_Folder | null;
    articleId?: KB_Article | null;
}

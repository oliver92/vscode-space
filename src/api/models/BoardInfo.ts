/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardColumns } from './BoardColumns';
import type { BoardOwners } from './BoardOwners';

export type BoardInfo = {
    owners: BoardOwners;
    columns: BoardColumns;
    description?: string | null;
}

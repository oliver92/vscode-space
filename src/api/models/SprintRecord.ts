/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardRecord } from './BoardRecord';
import type { SprintState } from './SprintState';

export type SprintRecord = {
    id: string;
    archived: boolean;
    board: BoardRecord;
    name: string;
    state: SprintState;
    from: string;
    to: string;
    default: boolean;
    description?: string | null;
}

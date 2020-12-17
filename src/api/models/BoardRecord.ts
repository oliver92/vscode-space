/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardInfo } from './BoardInfo';
import type { BoardWidgetData } from './BoardWidgetData';

export type BoardRecord = {
    id: string;
    archived: boolean;
    name: string;
    board: BoardRecord;
    data?: BoardWidgetData | null;
    info: BoardInfo;
}

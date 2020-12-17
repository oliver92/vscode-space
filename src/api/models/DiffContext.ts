/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiffSide } from './DiffSide';

export type DiffContext = {
    left?: DiffSide | null;
    right: DiffSide;
}

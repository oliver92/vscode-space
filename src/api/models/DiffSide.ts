/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiffSide_Empty } from './DiffSide_Empty';
import type { DiffSide_NonEmpty } from './DiffSide_NonEmpty';

export type DiffSide = (DiffSide_Empty | DiffSide_NonEmpty);

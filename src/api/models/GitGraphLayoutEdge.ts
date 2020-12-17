/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitGraphEdgeLineStyle } from './GitGraphEdgeLineStyle';
import type { GitGraphEdgeType } from './GitGraphEdgeType';

export type GitGraphLayoutEdge = {
    from: number;
    to: number;
    type: GitGraphEdgeType;
    style: GitGraphEdgeLineStyle;
    hasArrow: boolean;
    color: number;
}

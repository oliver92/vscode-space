/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitGraphLayoutEdge } from './GitGraphLayoutEdge';
import type { GitGraphLayoutNode } from './GitGraphLayoutNode';

export type GitGraphLayoutLine = {
    nodes: Array<GitGraphLayoutNode>;
    edges: Array<GitGraphLayoutEdge>;
}

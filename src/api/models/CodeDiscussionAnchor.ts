/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InterpolatedLineState } from './InterpolatedLineState';
import type { ProjectKey } from './ProjectKey';

export type CodeDiscussionAnchor = {
    project: ProjectKey;
    repository: string;
    revision: string;
    filename?: string | null;
    line?: number | null;
    oldLine?: number | null;
    interpolatedLineState?: InterpolatedLineState | null;
}

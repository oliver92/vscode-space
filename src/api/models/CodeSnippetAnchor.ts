/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectKey } from './ProjectKey';

export type CodeSnippetAnchor = {
    projectKey: ProjectKey;
    repository: string;
    revision: string;
    filename: string;
    lineIndex?: number | null;
    lineStart?: number | null;
    lineEnd?: number | null;
}

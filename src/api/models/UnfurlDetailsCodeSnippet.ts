/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeLine } from './CodeLine';
import type { CodeSnippetAnchor } from './CodeSnippetAnchor';

export type UnfurlDetailsCodeSnippet = {
    anchor: CodeSnippetAnchor;
    lines: Array<CodeLine>;
}

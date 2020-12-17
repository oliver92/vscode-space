/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiffLineType } from './DiffLineType';
import type { SyntaxMarkup } from './SyntaxMarkup';
import type { TextRange } from './TextRange';

export type InlineDiffLine = {
    text: string;
    type?: DiffLineType | null;
    oldLineNum?: number | null;
    newLineNum?: number | null;
    oldFileOffset: number;
    newFileOffset: number;
    syntax?: Array<SyntaxMarkup> | null;
    deletes?: Array<TextRange> | null;
    inserts?: Array<TextRange> | null;
}

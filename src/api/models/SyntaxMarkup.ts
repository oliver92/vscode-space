/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyntaxMarkupType } from './SyntaxMarkupType';
import type { TextRange } from './TextRange';

export type SyntaxMarkup = {
    type?: SyntaxMarkupType | null;
    range: TextRange;
}

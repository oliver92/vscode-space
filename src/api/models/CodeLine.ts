/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyntaxMarkup } from './SyntaxMarkup';

export type CodeLine = {
    text: string;
    index?: number | null;
    offset: number;
    syntax?: Array<SyntaxMarkup> | null;
}

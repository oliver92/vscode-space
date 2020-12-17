/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MCElement } from './MCElement';
import type { MCText } from './MCText';

export type MCSection = {
    header?: MCText | null;
    elements: Array<MCElement>;
    footer?: MCText | null;
}

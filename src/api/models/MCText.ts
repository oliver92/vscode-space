/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MCElement } from './MCElement';

export type MCText = {
    content: string;
    markdown: boolean;
    accessory?: MCElement | null;
}

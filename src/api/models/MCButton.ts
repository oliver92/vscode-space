/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MCAction } from './MCAction';

export type MCButton = {
    text: string;
    style: string;
    action: MCAction;
    disabled?: boolean | null;
}

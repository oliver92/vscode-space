/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { M2ItemContentDetails } from './M2ItemContentDetails';
import type { MCElement } from './MCElement';
import type { MCOutline } from './MCOutline';

export type MCMessage = {
    style: string;
    outline?: MCOutline | null;
    content: Array<MCElement>;
    serviceId?: string | null;
    supplementaryData?: string | null;
    extension?: M2ItemContentDetails | null;
}

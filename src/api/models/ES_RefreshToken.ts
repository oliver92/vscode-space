/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRecord } from './AccessRecord';

export type ES_RefreshToken = {
    id: string;
    scope: string;
    lastAccess?: AccessRecord | null;
}

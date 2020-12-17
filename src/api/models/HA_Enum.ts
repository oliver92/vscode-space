/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Deprecation } from './HA_Deprecation';

export type HA_Enum = {
    id: string;
    name: string;
    values: Array<string>;
    deprecation?: HA_Deprecation | null;
}

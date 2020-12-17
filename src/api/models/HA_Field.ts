/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_DefaultValue } from './HA_DefaultValue';
import type { HA_Deprecation } from './HA_Deprecation';
import type { HA_Type } from './HA_Type';

export type HA_Field = {
    name: string;
    type: HA_Type;
    defaultValue?: HA_DefaultValue | null;
    optional: boolean;
    deprecation?: HA_Deprecation | null;
}

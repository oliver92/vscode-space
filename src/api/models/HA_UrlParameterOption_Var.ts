/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Deprecation } from './HA_Deprecation';
import type { HA_Field } from './HA_Field';

export type HA_UrlParameterOption_Var = {
    parameter: HA_Field;
    prefixRequired: boolean;
    optionName: string;
    deprecation?: HA_Deprecation | null;
}

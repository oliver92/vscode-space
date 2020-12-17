/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Deprecation } from './HA_Deprecation';
import type { HA_UrlParameterOption } from './HA_UrlParameterOption';

export type HA_UrlParameter = {
    id: string;
    name: string;
    options: Array<HA_UrlParameterOption>;
    deprecation?: HA_Deprecation | null;
}

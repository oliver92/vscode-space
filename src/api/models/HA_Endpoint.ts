/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Deprecation } from './HA_Deprecation';
import type { HA_Method } from './HA_Method';
import type { HA_Parameter } from './HA_Parameter';
import type { HA_Path } from './HA_Path';
import type { HA_Resource } from './HA_Resource';
import type { HA_Right } from './HA_Right';
import type { HA_Type } from './HA_Type';
import type { HA_Type_Object } from './HA_Type_Object';

export type HA_Endpoint = {
    resource: HA_Resource;
    method: HA_Method;
    parameters: Array<HA_Parameter>;
    requestBody?: HA_Type_Object | null;
    responseBody?: HA_Type | null;
    path: HA_Path;
    displayName: string;
    functionName: string;
    doc?: string | null;
    deprecation?: HA_Deprecation | null;
    rights?: Array<HA_Right> | null;
}

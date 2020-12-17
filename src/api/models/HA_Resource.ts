/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Endpoint } from './HA_Endpoint';
import type { HA_Path } from './HA_Path';

export type HA_Resource = {
    id: string;
    path: HA_Path;
    displaySingular: string;
    displayPlural: string;
    parentResource?: HA_Resource | null;
    endpoints: Array<HA_Endpoint>;
    nestedResources: Array<HA_Resource>;
}

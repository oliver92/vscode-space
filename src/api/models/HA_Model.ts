/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Dto } from './HA_Dto';
import type { HA_Enum } from './HA_Enum';
import type { HA_MenuId } from './HA_MenuId';
import type { HA_Resource } from './HA_Resource';
import type { HA_UrlParameter } from './HA_UrlParameter';

export type HA_Model = {
    dto: Array<HA_Dto>;
    enums: Array<HA_Enum>;
    urlParams: Array<HA_UrlParameter>;
    resources: Array<HA_Resource>;
    allResources: Array<HA_Resource>;
    menuIds: Array<HA_MenuId>;
}

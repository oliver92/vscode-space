/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Deprecation } from './HA_Deprecation';
import type { HA_DtoField } from './HA_DtoField';
import type { HierarchyRole } from './HierarchyRole';

export type HA_Dto = {
    id: string;
    name: string;
    fields: Array<HA_DtoField>;
    hierarchyRole: HierarchyRole;
    extends?: HA_Dto | null;
    implements: Array<HA_Dto>;
    inheritors: Array<HA_Dto>;
    deprecation?: HA_Deprecation | null;
    record: boolean;
}

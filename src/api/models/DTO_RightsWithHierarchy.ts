/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DTO_RightsDeps } from './DTO_RightsDeps';
import type { DTO_RightsGroup } from './DTO_RightsGroup';
import type { DTO_RightType_Right } from './DTO_RightType_Right';

export type DTO_RightsWithHierarchy = {
    rights: Array<DTO_RightType_Right>;
    rightsGroups: Array<DTO_RightsGroup>;
    deps: Array<DTO_RightsDeps>;
}

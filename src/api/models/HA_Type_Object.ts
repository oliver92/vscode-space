/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Field } from './HA_Field';
import type { HA_Type_Object_Kind } from './HA_Type_Object_Kind';

export type HA_Type_Object = {
    fields: Array<HA_Field>;
    kind: HA_Type_Object_Kind;
    nullable: boolean;
}

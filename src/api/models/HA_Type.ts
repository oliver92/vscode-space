/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_Type_Array } from './HA_Type_Array';
import type { HA_Type_Dto } from './HA_Type_Dto';
import type { HA_Type_Enum } from './HA_Type_Enum';
import type { HA_Type_Map } from './HA_Type_Map';
import type { HA_Type_Object } from './HA_Type_Object';
import type { HA_Type_Primitive } from './HA_Type_Primitive';
import type { HA_Type_Ref } from './HA_Type_Ref';
import type { HA_Type_UrlParam } from './HA_Type_UrlParam';

export type HA_Type = (HA_Type_Primitive | HA_Type_Array | HA_Type_Map | HA_Type_Object | HA_Type_Dto | HA_Type_Ref | HA_Type_Enum | HA_Type_UrlParam);

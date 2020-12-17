/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_DefaultValue_Collection } from './HA_DefaultValue_Collection';
import type { HA_DefaultValue_Const_EnumEntry } from './HA_DefaultValue_Const_EnumEntry';
import type { HA_DefaultValue_Const_Primitive } from './HA_DefaultValue_Const_Primitive';
import type { HA_DefaultValue_Map } from './HA_DefaultValue_Map';
import type { HA_DefaultValue_Reference } from './HA_DefaultValue_Reference';

export type HA_DefaultValue = (HA_DefaultValue_Const_Primitive | HA_DefaultValue_Const_EnumEntry | HA_DefaultValue_Collection | HA_DefaultValue_Map | HA_DefaultValue_Reference);

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HA_PathSegment_Const } from './HA_PathSegment_Const';
import type { HA_PathSegment_PrefixedVar } from './HA_PathSegment_PrefixedVar';
import type { HA_PathSegment_Var } from './HA_PathSegment_Var';

export type HA_PathSegment = (HA_PathSegment_Var | HA_PathSegment_PrefixedVar | HA_PathSegment_Const);

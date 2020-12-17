/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateCFConstraint } from './DateCFConstraint';
import type { IntCFConstraint } from './IntCFConstraint';
import type { PercentageCFConstraint } from './PercentageCFConstraint';
import type { StringCFConstraint } from './StringCFConstraint';

export type CFConstraint = (DateCFConstraint | PercentageCFConstraint | StringCFConstraint | IntCFConstraint);

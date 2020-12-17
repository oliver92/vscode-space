/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumValueData } from './EnumValueData';

export type CFEnumValuesModification = {
    valuesToAdd: Array<EnumValueData>;
    valuesToUpdate: Array<EnumValueData>;
    valuesToDelete: Array<string>;
}

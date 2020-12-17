/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BooleanCFValue } from './BooleanCFValue';
import type { DateCFValue } from './DateCFValue';
import type { EnumCFValue } from './EnumCFValue';
import type { EnumListCFValue } from './EnumListCFValue';
import type { IntCFValue } from './IntCFValue';
import type { IntListCFValue } from './IntListCFValue';
import type { OpenEnumCFValue } from './OpenEnumCFValue';
import type { OpenEnumListCFValue } from './OpenEnumListCFValue';
import type { PercentageCFValue } from './PercentageCFValue';
import type { ProfileCFInputValue } from './ProfileCFInputValue';
import type { ProfileListCFInputValue } from './ProfileListCFInputValue';
import type { StringCFValue } from './StringCFValue';
import type { StringListCFValue } from './StringListCFValue';
import type { UrlCFValue } from './UrlCFValue';

export type CFInputValue = (OpenEnumCFValue | OpenEnumListCFValue | StringListCFValue | StringCFValue | PercentageCFValue | ProfileCFInputValue | ProfileListCFInputValue | UrlCFValue | DateCFValue | IntCFValue | IntListCFValue | EnumListCFValue | EnumCFValue | BooleanCFValue);

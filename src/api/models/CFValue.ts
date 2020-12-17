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
import type { ProfileCFValue } from './ProfileCFValue';
import type { ProfileListCFValue } from './ProfileListCFValue';
import type { StringCFValue } from './StringCFValue';
import type { StringListCFValue } from './StringListCFValue';
import type { UrlCFValue } from './UrlCFValue';

export type CFValue = (OpenEnumCFValue | OpenEnumListCFValue | StringListCFValue | StringCFValue | PercentageCFValue | ProfileCFValue | UrlCFValue | DateCFValue | IntCFValue | IntListCFValue | ProfileListCFValue | EnumListCFValue | EnumCFValue | BooleanCFValue);

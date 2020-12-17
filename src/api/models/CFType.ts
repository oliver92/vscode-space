/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BooleanCFType } from './BooleanCFType';
import type { DateCFType } from './DateCFType';
import type { EnumCFType } from './EnumCFType';
import type { EnumListCFType } from './EnumListCFType';
import type { IntCFType } from './IntCFType';
import type { IntListCFType } from './IntListCFType';
import type { OpenEnumCFType } from './OpenEnumCFType';
import type { OpenEnumListCFType } from './OpenEnumListCFType';
import type { PercentageCFType } from './PercentageCFType';
import type { ProfileCFType } from './ProfileCFType';
import type { ProfileListCFType } from './ProfileListCFType';
import type { StringCFType } from './StringCFType';
import type { StringListCFType } from './StringListCFType';
import type { UrlCFType } from './UrlCFType';

export type CFType = (IntListCFType | DateCFType | EnumListCFType | IntCFType | StringListCFType | BooleanCFType | EnumCFType | UrlCFType | OpenEnumListCFType | StringCFType | ProfileListCFType | PercentageCFType | ProfileCFType | OpenEnumCFType);

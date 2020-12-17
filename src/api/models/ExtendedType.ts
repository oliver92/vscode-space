/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendedTypeScopeType } from './ExtendedTypeScopeType';

export type ExtendedType = {
    key: string;
    displayName: string;
    apiClassName?: string | null;
    scopeType: ExtendedTypeScopeType;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessType } from './AccessType';
import type { CFConstraint } from './CFConstraint';
import type { CFType } from './CFType';
import type { CFValue } from './CFValue';
import type { ExtendedType } from './ExtendedType';
import type { ExtendedTypeScope } from './ExtendedTypeScope';

export type CustomField = {
    extendedType: ExtendedType;
    id: string;
    name: string;
    description?: string | null;
    key?: string | null;
    type: CFType;
    constraint?: CFConstraint | null;
    required: boolean;
    private: boolean;
    access?: AccessType | null;
    defaultValue: CFValue;
    order: number;
    scope?: ExtendedTypeScope | null;
    archived: boolean;
}

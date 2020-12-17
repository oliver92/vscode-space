/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageType } from './PackageType';

export type PackageVersionData = {
    type: PackageType;
    repository: string;
    name: string;
    version: string;
    tags?: Array<string> | null;
    created?: number | null;
    updated?: number | null;
    downloads?: number | null;
    pinned: boolean;
    comment?: string | null;
}

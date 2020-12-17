/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageType } from './PackageType';

export type PackageVersionInfo = {
    type: PackageType;
    repository: string;
    name: string;
    version: string;
    tags?: Array<string> | null;
}

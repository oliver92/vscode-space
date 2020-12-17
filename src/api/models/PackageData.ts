/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageType } from './PackageType';

export type PackageData = {
    type: PackageType;
    repository: string;
    name: string;
    versions: number;
    updated: number;
    lastVersion: string;
}

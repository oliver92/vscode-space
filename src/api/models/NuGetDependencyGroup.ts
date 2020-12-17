/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NuGetDependency } from './NuGetDependency';

export type NuGetDependencyGroup = {
    targetFramework?: string | null;
    dependencies?: Array<NuGetDependency> | null;
}

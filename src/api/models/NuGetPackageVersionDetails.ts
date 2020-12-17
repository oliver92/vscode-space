/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { NuGetDependencyGroup } from './NuGetDependencyGroup';
import type { PackageOrigin } from './PackageOrigin';
import type { PackageType } from './PackageType';

export type NuGetPackageVersionDetails = {
    type: PackageType;
    repository: string;
    name: string;
    version: string;
    tags?: Array<string> | null;
    created: number;
    accessed?: number | null;
    downloads: number;
    pinned: boolean;
    comment?: string | null;
    diskSize: number;
    author?: CPrincipal | null;
    authors?: Array<CPrincipal> | null;
    origin?: PackageOrigin | null;
    metadata?: Record<string, string> | null;
    description?: string | null;
    projectUrl?: string | null;
    license?: string | null;
    licenseUrl?: string | null;
    icon?: string | null;
    title?: string | null;
    dependencies: Array<NuGetDependencyGroup>;
}

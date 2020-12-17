/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { NpmPackageDependency } from './NpmPackageDependency';
import type { PackageOrigin } from './PackageOrigin';
import type { PackageType } from './PackageType';

export type NpmPackageVersionDetails = {
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
    dependencies: Array<NpmPackageDependency>;
    keywords: Array<string>;
    license?: string | null;
    projectUrl?: string | null;
    repositoryUrl?: string | null;
    repositoryRevision?: string | null;
    readme?: string | null;
}

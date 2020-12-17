/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { KotlinPlatform } from './KotlinPlatform';
import type { MavenPackageDependency } from './MavenPackageDependency';
import type { MavenPackageFile } from './MavenPackageFile';
import type { MavenPackageParent } from './MavenPackageParent';
import type { PackageOrigin } from './PackageOrigin';
import type { PackageType } from './PackageType';

export type MavenPackageVersionDetails = {
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
    packaging?: string | null;
    packageName?: string | null;
    description?: string | null;
    url?: string | null;
    licenses: Array<string>;
    scmUrl?: string | null;
    dependencies: Array<MavenPackageDependency>;
    kotlinPlatforms?: Array<KotlinPlatform> | null;
    parent?: MavenPackageParent | null;
    pathPrefix?: string | null;
    files: Array<MavenPackageFile>;
}

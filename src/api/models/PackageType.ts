/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerPackageType } from './ContainerPackageType';
import type { MavenPackageType } from './MavenPackageType';
import type { NpmPackageType } from './NpmPackageType';
import type { NuGetPackageType } from './NuGetPackageType';

export type PackageType = (MavenPackageType | ContainerPackageType | NuGetPackageType | NpmPackageType);

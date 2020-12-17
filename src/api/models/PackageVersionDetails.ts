/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerPackageVersionDetails } from './ContainerPackageVersionDetails';
import type { MavenPackageVersionDetails } from './MavenPackageVersionDetails';
import type { NpmPackageVersionDetails } from './NpmPackageVersionDetails';
import type { NuGetPackageVersionDetails } from './NuGetPackageVersionDetails';

export type PackageVersionDetails = (MavenPackageVersionDetails | ContainerPackageVersionDetails | NuGetPackageVersionDetails | NpmPackageVersionDetails);

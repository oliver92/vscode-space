/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerHelmChart } from './ContainerHelmChart';
import type { ContainerImage } from './ContainerImage';
import type { CPrincipal } from './CPrincipal';
import type { PackageOrigin } from './PackageOrigin';
import type { PackageType } from './PackageType';

export type ContainerPackageVersionDetails = {
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
    schemaVersion: number;
    mediaType: string;
    manifestType: string;
    image?: ContainerImage | null;
    chart?: ContainerHelmChart | null;
}

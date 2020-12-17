/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerHelmChart } from './ContainerHelmChart';
import type { ContainerImage } from './ContainerImage';

export type ContainerManifest = {
    name: string;
    digest: string;
    tags: Array<string>;
    created: number;
    schemaVersion: number;
    mediaType: string;
    manifestType: string;
    totalSize: number;
    image?: ContainerImage | null;
    chart?: ContainerHelmChart | null;
}

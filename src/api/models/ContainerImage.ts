/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerImageAnnotation } from './ContainerImageAnnotation';
import type { ContainerImageConfig } from './ContainerImageConfig';
import type { ContainerImageLayer } from './ContainerImageLayer';
import type { ContainerImagePlatform } from './ContainerImagePlatform';
import type { ContainerManifest } from './ContainerManifest';

export type ContainerImage = {
    name?: string | null;
    description?: string | null;
    tags?: Array<string> | null;
    projectUrl?: string | null;
    sourceUrl?: string | null;
    version?: string | null;
    platform?: ContainerImagePlatform | null;
    history: Array<ContainerImageLayer>;
    children: Array<ContainerManifest>;
    config?: ContainerImageConfig | null;
    annotation?: ContainerImageAnnotation | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerHelmChartDependency } from './ContainerHelmChartDependency';

export type ContainerHelmChart = {
    name?: string | null;
    description?: string | null;
    tags?: Array<string> | null;
    projectUrl?: string | null;
    sourceUrl?: string | null;
    version?: string | null;
    apiVersion?: string | null;
    appVersion?: string | null;
    dependencies: Array<ContainerHelmChartDependency>;
    type?: string | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContainerHelmChartDependency = {
    name: string;
    version: string;
    repository?: string | null;
    condition?: string | null;
    tags?: Array<string> | null;
}

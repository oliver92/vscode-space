/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContainerImageConfig = {
    userName?: string | null;
    ports?: Array<string> | null;
    volumes?: Array<string> | null;
    env?: Array<string> | null;
    workingDir?: string | null;
    entryPoint?: string | null;
    cmd?: string | null;
    labels?: Array<string> | null;
}

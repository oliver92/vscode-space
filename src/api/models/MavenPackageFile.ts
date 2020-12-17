/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MavenChecksum } from './MavenChecksum';

export type MavenPackageFile = {
    name: string;
    created: number;
    length: number;
    checksums: Array<MavenChecksum>;
}

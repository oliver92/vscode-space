/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageRepositoryCredentials } from './PackageRepositoryCredentials';

export type PackageRepositoryMirror_External = {
    id: string;
    url: string;
    credentials: PackageRepositoryCredentials;
    secretId?: string | null;
    secretValue?: string | null;
}

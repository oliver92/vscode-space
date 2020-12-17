/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_PackageRepositorySettings } from './ES_PackageRepositorySettings';
import type { PackageRepositoryMode } from './PackageRepositoryMode';
import type { PackageType } from './PackageType';

export type PackageRepository = {
    id: string;
    type: PackageType;
    name?: string | null;
    description?: string | null;
    public: boolean;
    settings?: ES_PackageRepositorySettings | null;
    mode: PackageRepositoryMode;
    archived: boolean;
}
